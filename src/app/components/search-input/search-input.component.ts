import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {

  searchInputValue = '';

  constructor() { }

  ngOnInit(): void {
  }

  @Output() 
  inputChanged = new EventEmitter<string>();

  onInputChange(){
    this.inputChanged.emit(this.searchInputValue);
  }

}
