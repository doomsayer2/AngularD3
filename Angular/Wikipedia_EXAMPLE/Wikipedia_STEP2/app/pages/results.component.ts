import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';
// This module is used in order to import jsonp format from wikipedia (a json with a function).
import { Jsonp, Response, URLSearchParams } from '@angular/http';

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
    private _jsonp: Jsonp) { }

  ngOnInit() {
    // Get the parameters from the URL as an Observable
    this._route.params.forEach((params: Params) => {    // Whenever the parameter in URL changes the observable triggers.
      this.search = params['search'];
      this.results = [];    // Empty array before new search param.

      let url = new URLSearchParams('https://de.wikipedia.org/w/api.php?');
      url.set('action', 'query');
      url.set('list', 'search');
      url.set('srsearch', this.search);
      url.set('format', 'json');
      url.set('callback', 'JSONP_CALLBACK');

      /* let url = 'https://de.wikipedia.org/w/api.php?action=query&list=search&srsearch=Berlin&format=json&callback=JSONP_CALLBACK'; */
      // We get an observable back which we loop over with forEach.
      this._jsonp.get(url.toString()).forEach((response: Response) => {
        let results = response.json()['query']['search'];

        for (let result of results) {
          this.results.push(result['title']);
        }
      });
    });
  }
}
