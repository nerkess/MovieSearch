import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Output() searchEvent: EventEmitter<string> = new EventEmitter<string>();
  movieToSearch: FormControl;

  constructor() {
  }

  ngOnInit(): void {
    this.movieToSearch = new FormControl('');
  }

  search(): void {
    this.searchEvent.emit(this.movieToSearch.value);
  }
}
