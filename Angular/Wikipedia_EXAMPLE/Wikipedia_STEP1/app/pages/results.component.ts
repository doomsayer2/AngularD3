import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';
// This module is used in order to import jsonp format from wikipedia (a json with a function).
import { Jsonp, Response } from '@angular/http';

@Component({
    selector: 'my-results',
    template: `
      <div class="container">
        Results for {{search}}
      </div>
    `
})
export class ResultsComponent implements OnInit {
  search: string;

  constructor(
    private _route: ActivatedRoute,
    private _jsonp: Jsonp) { }

  ngOnInit() {
    // Get the parameters from the URL as an Observable
    this._route.params.forEach((params: Params) => {    // Whenever the parameter in URL changes the observable triggers.
      this.search = params['search'];
      let url = 'https://de.wikipedia.org/w/api.php?action=query&list=search&srsearch=Berlin&format=json&callback=JSONP_CALLBACK';
      // We get an observable back which we loop over with forEach.
      this._jsonp.get(url).forEach((response: Response) => {
        console.log(response.json());
      });
    });
  }
}
