import { Component } from '@angular/core';
import { Todo } from './todo';

// Allows angular to get meta information about a component
@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html' ,
    styleUrls: ['app/app.component.css']
})
export class AppComponent {
    todos = [
        new Todo('Angular learn', 'high'),
        new Todo('Eat something', 'low')
    ];
}
