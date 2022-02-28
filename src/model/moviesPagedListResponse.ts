import { Movie } from "./movie";

export interface MoviesPagedListResponse {
    page?: number;
    results?: Array<Movie>;
    total_results?: number;
    total_pages?: number;
}