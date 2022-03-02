import { ChangeDetectionStrategy, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, filter, fromEvent, map, Observable, of, Subject, Subscription } from 'rxjs';
import { Movie } from 'src/model/movie';
import { MovieDashboardService } from './movie-dashboard.service';
import { formatMovies } from 'src/helpers/formatters'

@Component({
  selector: 'movie-dashboard',
  templateUrl: './movie-dashboard.component.html',
  styleUrls: ['./movie-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieDashboardComponent implements OnInit, OnDestroy {

  @ViewChild('widgetsContent') widgetsContent: ElementRef;
  @ViewChild('movieSearchInput', { static: true }) movieSearchInput: ElementRef;

  private subsc: Subscription = new Subscription();
  private destroy$ = new Subject<void>();
  public movies: Array<Movie>;
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
  ];

  public language = [
    { value: 'pt-BR', viewValue: 'Portuguese' },
    { value: 'en-US', viewValue: 'English' },
    { value: 'es-ES', viewValue: 'Spanish' },
  ];

  public selectedLanguage = localStorage.getItem('language') || this.language[0].value;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private movieDashboardService: MovieDashboardService,
  ) {
    this.isSearching = !!this.activatedRoute.snapshot.queryParams['query']
  }

  ngOnInit(): void {
    // to preserve query term and get new search when we visit the platform directly accessing the route 'movie/search[...]'
    this.activatedRoute.paramMap.subscribe(_ => {
      if (this.activatedRoute.snapshot.queryParams['query']) {
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
      this.isSearching = true;
      this.router.navigate(['/movie/search'], { queryParams: { query: text }});
    });

  }

  ngOnDestroy(): void {
    this.subsc.unsubscribe();
    this.destroy$.next();
    this.destroy$.complete();
  }

  private getSearch(term: string): Observable<any> {
    if (term === '') {
      return of([]);
    }
    return this.movieDashboardService.searchMovie(term);
  }

  public clearSearchInput(event: any) {
    if (!event.target.value) {
      this.router.navigate(['/movie/most-popular']);
      this.isSearching = false;
    }
  }

  public search() {
    if (this.movieSearchInput.nativeElement.value) {
      this.router.navigate(['/movie/search'], { queryParams: { query: this.movieSearchInput.nativeElement.value }, preserveFragment: true });

      this.getSearch(this.movieSearchInput.nativeElement.value).subscribe((res) => {
        this.movies = formatMovies(res);
      }, (err) => {
        this.isSearching = false;
        console.log('error', err);
      });

    }
  }

  public setLanguage(language: string) {
    localStorage.setItem('language', language);
    window.location.reload();
    this.selectedLanguage = language;
  }

  public checkLanguage(flagReceived) {
    let lang = localStorage.getItem('language');
    return lang === flagReceived ? 'flag-selected' : ''; 
  }

  scrollLeft() {
    this.widgetsContent.nativeElement.scrollLeft -= 150;
  }

  scrollRight() {
    this.widgetsContent.nativeElement.scrollLeft += 150;
  }

}
