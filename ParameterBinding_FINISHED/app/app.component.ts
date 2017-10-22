import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
      <div>
        <my-select [options]='options' [(model)]='selectedLanguage'></my-select>
        <p>{{ selectedLanguage }}</p>
      </div>
    `
})
export class AppComponent {
  selectedLanguage = 'German';
  options = [
    'German',
    'English',
    'Hungarian'
  ];
}
