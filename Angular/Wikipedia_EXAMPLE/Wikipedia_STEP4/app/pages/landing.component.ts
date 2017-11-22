import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'my-landing',
    template: `
      <div class='container'>
        <my-panel>
          <my-panel-title>Search Wikipedia</my-panel-title>
          <my-panel-content>
            <input class='form-control' type='text'[(ngModel)]='title'>
            <br />
            <button class='btn btn-primary' (click)='onSearch()'>Search!</button>
          </my-panel-content>
        </my-panel>
      </div>
    `
})
export class LandingComponent {
   public title: string = '';

   constructor(private _router: Router) {

   }

   onSearch() {
     // Example route: #results/Berlin
     this._router.navigate(['results', this.title]);    // Change the path of the website or redirect the user.
   }
}
