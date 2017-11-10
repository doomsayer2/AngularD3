import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
      <div *ngFor='let card of cards'>
        <my-card title='{{ card.title }}' [date]='card.date'></my-card>
      </div>
    `
})
export class AppComponent {
  cards = [
    {
      title: 'Angular is great!',
      date: new Date(2020, 1, 1)
    },
    {
      title: 'TypeScript is cool!',
      date: new Date(2019, 1, 1)
    }
  ];
}
