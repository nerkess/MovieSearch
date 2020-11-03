import {Movie} from './movie';

export interface SearchMovie {
  results: Movie[];
  total_results: number;
  total_pages: number;
}
