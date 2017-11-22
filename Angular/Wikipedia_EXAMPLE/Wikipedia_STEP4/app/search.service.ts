import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';
// This module jsonp is used in order to import jsonp format from wikipedia (a json with a function).
import { Jsonp, Response, URLSearchParams } from '@angular/http';

@Injectable()
export class SearchService {
  constructor(private _jsonp: Jsonp) {}

  public search(term: string) {
    let url = new URLSearchParams('https://de.wikipedia.org/w/api.php?');
    url.set('action', 'query');
    url.set('list', 'search');
    url.set('srsearch', term);
    url.set('format', 'json');
    url.set('callback', 'JSONP_CALLBACK');

   return this._jsonp
      .get(url.toString())
      .map((response: Response) => {    // Transform the observable or the results of the observable.
          return response.json()['query']['search'];
      })
      .map((results: any[]) => {    // Now we extract the titles from the results.
        let titles = [];
        for (let result of results) {
            titles.push(result['title']);
        }
        return titles;
      })
      .flatMap((titles: any[]) => {     // The operator after this will be executed for each list element.
          return titles;
      })
/*       .forEach((a: any) => {
          console.log(a);
      }) */;
  }
}
