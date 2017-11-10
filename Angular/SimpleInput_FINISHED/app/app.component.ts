import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
      <div>
        <input type='text' (keyup)='onInputChange($event.target.value)'/>
        <p *ngIf='inputValue != ""'>Here stands: {{ inputValue }}!</p>
      </div>
    `
})
export class AppComponent {
    inputValue = '';

    // The $event is from Angular and gives us the event so we can use it in this function.
    onInputChange(inputValue: string) {
        this.inputValue = inputValue;
    }

/*     onInputChange(event: KeyboardEvent) {
        this.inputValue = (<HTMLInputElement> event.target).value;
    } */
}
