import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {SearchMovies} from '../models/search-movies';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchMovieService {
  searchedMovies = new Observable<SearchMovies>();

  constructor(private http: HttpClient) {
  }

  public searchMovie(movie: string): void {
    this.searchedMovies = this.http.get<SearchMovies>('https://api.themoviedb.org/3/search/movie',
      {
        params: new HttpParams().set('query', movie)
      });
  }
}
