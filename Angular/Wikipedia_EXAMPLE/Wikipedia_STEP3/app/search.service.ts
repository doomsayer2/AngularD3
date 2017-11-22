import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';
// This module jsonp is used in order to import jsonp format from wikipedia (a json with a function).
import { Jsonp, Response, URLSearchParams } from '@angular/http';

@Injectable()
export class SearchService {
    constructor(private _jsonp: Jsonp) { }

    public search(term: string) {
        let url = new URLSearchParams('https://de.wikipedia.org/w/api.php?');
        url.set('action', 'query');
        url.set('list', 'search');
        url.set('srsearch', term);
        url.set('format', 'json');
        url.set('callback', 'JSONP_CALLBACK');

        let observable = new Observable((observer: any) => { // The observable we want to return.
        this._jsonp.get(url.toString()).forEach((response: Response) => {
            let results = response.json()['query']['search'];
            console.log(results);

            for (let result of results) {
                observer.next(result['title']); // Push the next element into our observable stream.
            }
          });
        });

        return observable;
    }
}
