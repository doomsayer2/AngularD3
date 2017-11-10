import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
      <div>
        <input type='text' [(ngModel)]='blogPost.title' />
        <my-select [options]='options' (onChange)='onLanguageChange($event)'></my-select>
        <p>{{ blogPost.title }}</p>
      </div>
    `
})
export class AppComponent {
  options = [
    'German',
    'English',
    'Hungarian'
  ];
  blogPost = {
    title: 'Title of Blog',
    content: 'Content of Blog'
  };

  onLanguageChange(newLanguage: string) {
    alert('onLanguageChange(): ' + newLanguage);
  }
}
