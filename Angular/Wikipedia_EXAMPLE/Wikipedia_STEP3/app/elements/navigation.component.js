"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var NavigationComponent = (function () {
    function NavigationComponent() {
    }
    return NavigationComponent;
}());
NavigationComponent = __decorate([
    core_1.Component({
        selector: "my-element-navigation",
        template: "\n    <div class=\"navbar navbar-default\">\n        <div class=\"container-fluid\">\n            <ul class=\"nav navbar-nav\">\n                <li routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\n                    <a routerLink=\"/\">Startseite</a>\n                </li>\n                <li routerLinkActive=\"active\">\n                    <a routerLink=\"/about-us/123\">\u00DCber uns</a>\n                </li>\n            \n            </ul>\n        </div>\n    </div>\n    \n    "
    })
], NavigationComponent);
exports.NavigationComponent = NavigationComponent;
//# sourceMappingURL=navigation.component.js.map