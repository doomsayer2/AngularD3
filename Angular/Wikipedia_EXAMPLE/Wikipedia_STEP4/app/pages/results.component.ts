import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';
import { SearchService } from '../search.service';

@Component({
    selector: 'my-results',
    template: `
      <div class='container'>
        Results for {{search}}
        <ul>
          <li *ngFor='let result of results'>
            {{result}}
          </li>
        </ul>
      </div>
    `
})
export class ResultsComponent implements OnInit {
  search: string;
  results: string[] = [];

  constructor(
    private _route: ActivatedRoute,
    private _searchService: SearchService) { }

  ngOnInit() {
    // Get the parameters from the URL as an Observable
    this._route.params.forEach((params: Params) => {    // Whenever the parameter in URL changes the observable triggers.
      this.search = params['search'];
      this.results = [];    // Clear the previous entries.

      this._searchService.search(this.search).forEach((item: string) => {    // Here we call our service
        console.log(item);
        this.results.push(item);
      });
    });
  }
}
