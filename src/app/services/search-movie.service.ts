import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {SearchMovie} from '../models/search-movie';

@Injectable({
  providedIn: 'root'
})
export class SearchMovieService {


  constructor(private http: HttpClient) { }

  public searchMovie(movie: string): void{
    this.http.get('https://api.themoviedb.org/3/search/movie',
      {
        params: new HttpParams().set('query', movie)
      })
      .subscribe((movies: SearchMovie) => {
        console.log('Movies: ', movies);
      });
  }
}
