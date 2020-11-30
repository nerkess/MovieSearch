import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Movie, SearchMovies, TmdbService} from 'tmdb-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  latestMovie: Observable<Movie>;
  searchedMovies: Observable<SearchMovies>;
  constructor(private tmdbService: TmdbService) { }

  ngOnInit(): void {
    this.getLatestMovie();
  }

  search(value: string): void {
    this.searchedMovies = this.tmdbService.searchMovie(value);
  }

  getLatestMovie(): void{
    this.latestMovie = this.tmdbService.getLatestMovie();
  }
}
