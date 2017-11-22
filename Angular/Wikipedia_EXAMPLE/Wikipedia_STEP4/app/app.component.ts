import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
      <div class="container">
        <my-element-navigation></my-element-navigation>
        <router-outlet></router-outlet>
      </div>
    `
})
export class AppComponent {

}
