import {Component} from '@angular/core';
import {SearchMovieService} from './services/search-movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'movie-search';

  constructor(public searchMovieService: SearchMovieService) {
  }

}
