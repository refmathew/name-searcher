import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'name-searcher';
  searchInputValue = '';

  ngOnInit() {
  }

  onInputChange(searchInputValue: string){
    this.searchInputValue = searchInputValue;
  }
}
