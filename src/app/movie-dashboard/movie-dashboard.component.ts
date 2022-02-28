import {ChangeDetectionStrategy, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, filter, fromEvent, map, Observable, of, Subscription } from 'rxjs';
import { MovieDashboardService } from './movie-dashboard.service';

@Component({
  selector: 'app-movie-dashboard',
  templateUrl: './movie-dashboard.component.html',
  styleUrls: ['./movie-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieDashboardComponent implements OnInit, OnDestroy {

  @ViewChild('widgetsContent') widgetsContent: ElementRef;
  @ViewChild('movieSearchInput', { static: true }) movieSearchInput: ElementRef;
  private subsc: Subscription = new Subscription();
  public apiResponse: any;
  public isSearching: boolean = false;
  
  public tabs = [
    {
      label: 'Most Popular',
      path: '/movie/most-popular',
    },
    {
      label: 'Now Playing',
      path: '/movie/now-playing',
    },
    {
      label: 'Top Rated',
      path: '/movie/top-rated',
    },
  ]

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private movieDashboardService: MovieDashboardService,
  ) {

    this.isSearching = !!this.activatedRoute.snapshot.queryParams['query']

    switch (this.router.url) {
      case '/movie/most-popular':
        this.movieDashboardService.getMovie('popular').subscribe((a) => console.log(a));
        break;
      case '/movie/now-playing':
        this.movieDashboardService.getMovie('now_playing').subscribe((a) => console.log(a));
        break;
      case '/movie/top-rated':
        this.movieDashboardService.getMovie('top_rated').subscribe((a) => console.log(a));
        break;
      default:
        break;
    }

  }
  
  ngOnInit(): void {

    // to preserve query term and get new search when we visit the platform directly accessing the route 'movie/search[...]'
    this.activatedRoute.paramMap.subscribe(_ => {
      if(this.activatedRoute.snapshot.queryParams['query']) {
        this.getSearch(this.activatedRoute.snapshot.queryParams['query'])
          .subscribe(_ => {
            this.movieSearchInput.nativeElement.value = this.activatedRoute.snapshot.queryParams['query'];
          });
      }
    });

    fromEvent(this.movieSearchInput.nativeElement, 'keyup').pipe(
      map((event: any) => {
        return event.target.value;
      }),
      filter(res => res.length > 2),
      debounceTime(250), //The search input should not trigger any call when the same word is written within the interval of 250 milliseconds
      distinctUntilChanged()
    ).subscribe((text: string) => {

      this.router.navigate(['/movie/search'], { queryParams: { query: text }, preserveFragment: true  });

      this.getSearch(text).subscribe((res) => {
        this.apiResponse = res;
      }, (err) => {
        this.isSearching = false;
        console.log('error', err);
      });

    });

  }

  ngOnDestroy(): void {
    this.subsc.unsubscribe();
  }

  private getSearch(term: string): Observable<any> {
    if (term === '') {
      return of([]);
    }
    return this.movieDashboardService.searchMovie(term);
  }

  onSearchCustomer(event: any) {
    if(!event.target.value) {
      this.router.navigate(['/movie/most-popular']);
      this.isSearching = !!this.activatedRoute.snapshot.queryParams['query']
    }
 }

  scrollLeft(){
    this.widgetsContent.nativeElement.scrollLeft -= 150;
  }

  scrollRight(){
    this.widgetsContent.nativeElement.scrollLeft += 150;
  }

}
