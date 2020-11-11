import { Injectable } from '@angular/core';
import {SearchMovies} from './models/search-movies';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {

  constructor(private http: HttpClient) { }

  public searchMovie(movie: string): Observable<SearchMovies> {
    return this.http.get<SearchMovies>('https://api.themoviedb.org/3/search/movie',
      {
        params: new HttpParams().set('query', movie)
      });
  }
}
