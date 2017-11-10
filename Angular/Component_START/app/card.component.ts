import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-card',
  template: `
    <div style='border: 1px solid green;'>
      {{ title }}
    </div>
  `
})
export class CardComponent {
  @Input() title: String;   // This variable is a attribute for our custom html element.
}
