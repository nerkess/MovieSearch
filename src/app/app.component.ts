import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {SearchMovies, TmdbService} from 'tmdb-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'movie-search';

  searchedMovies: Observable<SearchMovies>;

  constructor(private tmdbService: TmdbService) {
  }

  search(value: string): void {
    this.searchedMovies = this.tmdbService.searchMovie(value);
  }

}
