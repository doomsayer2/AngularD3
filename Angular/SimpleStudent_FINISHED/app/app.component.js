"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var student_1 = require("./student");
var AppComponent = (function () {
    function AppComponent() {
        this.students = [
            new student_1.Student('Erik', 'Müller'),
            new student_1.Student('Tanja', 'Müller'),
            new student_1.Student('Max', 'Mustermann')
        ];
    }
    AppComponent.prototype.onRemoveStudent = function (index) {
        this.students.splice(index, 1);
    };
    AppComponent.prototype.onAddStudent = function () {
        this.students.push(new student_1.Student('Neuer Student', 'Nachname'));
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n      <div>\n        <button (click)='onAddStudent()'>Klick mich!</button>\n        <ul>\n          <li *ngFor='let student of students; let i = index'>\n            {{ i }}:\n            {{ student.firstname }}\n            {{ student.lastname }}\n            <button (click)='onRemoveStudent(i)'>Student entfernen!</button>\n          </li>\n        </ul>\n      </div>\n    "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map