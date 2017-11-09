import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from './todo';

@Component({
    selector: 'my-todo-add',
    templateUrl: 'app/todo-add.component.html'
})
export class TodoAddComponent {
    todo = new Todo();
    // Event Emitter generic that only accepts Todo objects
    @Output() onTodoAdd = new EventEmitter<Todo>();

    /**
     * Upon clicking the button we pass the current todo object in the event chain to the 
     * parent component using the event emitters.
     */
    onSubmitTodo() {
        this.onTodoAdd.emit(this.todo);
        this.todo = new Todo(); // Add this in order to not reference always the same todo.
    }
}
