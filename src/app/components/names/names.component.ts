import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.scss']
})
export class NamesComponent implements OnInit {
  names = [
    "Ivan Deo Ferrolino",
    "Jayson C. San Agustin",
    "Mary Angel Therese S. Banderada",
    "Mathew Jolan F. Reforma",
    "Mel Gibson D. Yerro",
    "Paul Angelo Dinglasan",
    "Reio Jan Matthew L. De Ocampo",
  ]

  private _searchInputValue!: string;

  @Input()
  set searchInputValue(searchInputValue: string) { this._searchInputValue = searchInputValue }
  get searchInputValue() { return this._searchInputValue }

  constructor() { }

  ngOnInit(): void {
  }
}
