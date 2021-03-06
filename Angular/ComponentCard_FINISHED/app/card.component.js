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
var CardComponent = (function () {
    /**
     * This can be used to debug a component and all of it's properties.
     */
    function CardComponent() {
        console.log(this);
    }
    return CardComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CardComponent.prototype, "title", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Date)
], CardComponent.prototype, "date", void 0);
CardComponent = __decorate([
    core_1.Component({
        selector: 'my-card',
        template: "\n    <div style='border: 1px solid green;'>\n      {{ title }}\n      {{ date.getFullYear() }}\n    </div>\n  "
    }),
    __metadata("design:paramtypes", [])
], CardComponent);
exports.CardComponent = CardComponent;
//# sourceMappingURL=card.component.js.map