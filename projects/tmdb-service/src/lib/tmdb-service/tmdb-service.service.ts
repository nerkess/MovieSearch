import { Injectable } from '@angular/core';
import {SearchMovies} from '../models/search-movies';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Movie} from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {

  constructor(private http: HttpClient) { }

  public getLatestMovie(): Observable<Movie>{
    return this.http.get<Movie>('https://api.themoviedb.org/3/movie/latest');
  }

  public searchMovie(movie: string): Observable<SearchMovies> {
    return this.http.get<SearchMovies>('https://api.themoviedb.org/3/search/movie',
      {
        params: new HttpParams().set('query', movie)
      });
  }
}
