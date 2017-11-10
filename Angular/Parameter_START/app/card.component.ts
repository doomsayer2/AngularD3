import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-card',
  template: `
    <div style='border: 1px solid green;'>
      {{ title }}
      {{ date.getFullYear() }}
    </div>
  `
})
export class CardComponent {
  @Input() title: String;   // This variable is a attribute for our custom html element.
  @Input() date: Date;

  /**
   * This can be used to debug a component and all of it's properties.
   */
  constructor() {
    console.log(this);
  }
}
