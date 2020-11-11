import {Movie} from './movie';

export interface SearchMovies {
  results: Movie[];
  // tslint:disable-next-line:variable-name
  total_results: number;
  // tslint:disable-next-line:variable-name
  total_pages: number;
}
