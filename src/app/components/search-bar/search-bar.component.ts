import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {SearchMovieService} from '../../services/search-movie.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  movieToSearch: FormControl;

  constructor(private searchMovieService: SearchMovieService) { }

  ngOnInit(): void {
    this.movieToSearch = new FormControl('');
  }

  search(): void{
    console.log(this.movieToSearch);
    this.searchMovieService.searchMovie(this.movieToSearch.value);
  }
}
