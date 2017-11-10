"use strict";
var Todo = (function () {
    function Todo(title, urgency) {
        if (title === void 0) { title = ''; }
        if (urgency === void 0) { urgency = 'normal'; }
        this.title = title;
        this.urgency = urgency;
    }
    return Todo;
}());
exports.Todo = Todo;
//# sourceMappingURL=todo.js.map