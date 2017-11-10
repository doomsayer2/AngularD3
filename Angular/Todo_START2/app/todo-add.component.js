"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var todo_1 = require("./todo");
var TodoAddComponent = (function () {
    function TodoAddComponent() {
        this.todo = new todo_1.Todo();
        // Event Emitter generic that only accepts Todo objects
        this.onTodoAdd = new core_1.EventEmitter();
    }
    /**
     * Upon clicking the button we pass the current todo object in the event chain to the
     * parent component using the event emitters.
     */
    TodoAddComponent.prototype.onSubmitTodo = function () {
        this.onTodoAdd.emit(this.todo);
        this.todo = new todo_1.Todo(); // Add this in order to not reference always the same todo.
    };
    return TodoAddComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TodoAddComponent.prototype, "onTodoAdd", void 0);
TodoAddComponent = __decorate([
    core_1.Component({
        selector: 'my-todo-add',
        templateUrl: 'app/todo-add.component.html'
    })
], TodoAddComponent);
exports.TodoAddComponent = TodoAddComponent;
//# sourceMappingURL=todo-add.component.js.map