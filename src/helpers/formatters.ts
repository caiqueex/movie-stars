import { HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const API_KEY = environment.API_KEY;

export const formatParameters = (options: any) => {
    let params = new HttpParams()
        .set('api_key', API_KEY)
        .set('language', 'en-US');

    if (options) {
        Object.keys(options).forEach((key) => {
            params = params.append(key, options[key]);
        });
    }
    return { params };
}

export const formatMovies = (movies) => {
    const imgUrl = environment.IMG_PATH;
    return movies.map(movie => {
        if (movie) {
            movie.poster_path = movie.poster_path
                ? `${imgUrl}${movie.poster_path}`
                : './assets/images/no-image.png';
            movie.backdrop_path = movie.backdrop_path
                ? `${imgUrl}${movie.backdrop_path}`
                : './assets/images/no-image.png';
            movie.overview = movie.overview.substr(0, 100) + '...';
            return movie;
        }
    });
}

export const formatMovieDetails = (movie) => {
    const imgUrl = environment.IMG_PATH;
        if (movie) {
            movie.poster_path = movie.poster_path
                ? `${imgUrl}${movie.poster_path}`
                : './assets/images/no-image.png';
            movie.backdrop_path = movie.backdrop_path
                ? `${imgUrl}${movie.backdrop_path}`
                : './assets/images/no-image.png';
            movie.overview = movie.overview.substr(0, 100) + '...';
            return movie;
        }

}

export const formatGenres = (arr) => {
    return arr.map(x => x.name).join(", ");
}
