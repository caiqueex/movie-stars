import { MovieVideo } from "./movieVideo";

export interface MovieVideosPagedListResponse {
    id?: number;
    results: Array<MovieVideo>;
}