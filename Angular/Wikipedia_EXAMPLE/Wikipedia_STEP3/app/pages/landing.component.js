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
var router_1 = require("@angular/router");
var LandingComponent = (function () {
    function LandingComponent(_router) {
        this._router = _router;
        this.title = '';
    }
    LandingComponent.prototype.onSearch = function () {
        // Example route: #results/Berlin
        this._router.navigate(['results', this.title]); // Change the path of the website or redirect the user.
    };
    return LandingComponent;
}());
LandingComponent = __decorate([
    core_1.Component({
        selector: 'my-landing',
        template: "\n      <div class='container'>\n        <my-panel>\n          <my-panel-title>Search Wikipedia</my-panel-title>\n          <my-panel-content>\n            <input class='form-control' type='text'[(ngModel)]='title'>\n            <br />\n            <button class='btn btn-primary' (click)='onSearch()'>Search!</button>\n          </my-panel-content>\n        </my-panel>\n      </div>\n    "
    }),
    __metadata("design:paramtypes", [router_1.Router])
], LandingComponent);
exports.LandingComponent = LandingComponent;
//# sourceMappingURL=landing.component.js.map