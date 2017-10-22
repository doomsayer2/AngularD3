"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.counterRunning = false;
        this.currentTime = 0;
    }
    AppComponent.prototype.onStartCounter = function () {
        var _this = this;
        this.counterRunning = true;
        this.intervalId = setInterval(function () {
            _this.currentTime += 1;
        }, 1000);
    };
    AppComponent.prototype.onStopCounter = function () {
        this.counterRunning = false;
        clearInterval(this.intervalId);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n      <div>\n        <button *ngIf='!counterRunning' (click)='onStartCounter()'>Start watch!</button>\n        <p *ngIf='counterRunning'>{{ currentTime }}</p>\n        <button *ngIf='counterRunning' (click)='onStopCounter()'>Stop watch!</button>\n      </div>\n    "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map