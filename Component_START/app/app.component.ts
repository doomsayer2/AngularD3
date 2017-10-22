import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
      <div>
        <my-card title='Angular is cool!'></my-card>
        <my-card title='TypeScript is cool!'></my-card>
      </div>
    `
})
export class AppComponent {
}
