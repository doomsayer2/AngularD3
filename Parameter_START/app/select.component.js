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
var SelectComponent = (function () {
    function SelectComponent() {
        this.dropDownOpened = false;
        this.buttonLabel = '-- Choose --';
        this.onChange = new core_1.EventEmitter();
    }
    SelectComponent.prototype.onClickOption = function (clickOption) {
        this.buttonLabel = clickOption;
        this.dropDownOpened = false;
        this.onChange.emit(clickOption);
    };
    return SelectComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], SelectComponent.prototype, "options", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SelectComponent.prototype, "onChange", void 0);
SelectComponent = __decorate([
    core_1.Component({
        selector: 'my-select',
        template: "\n        <!-- Single button -->\n        <div class='btn-group'>\n        <button type='button' class='btn btn-default dropdown-toggle' \n            (click)='dropDownOpened = !dropDownOpened'>\n        {{ buttonLabel }} <span class='caret'></span>\n        </button>\n        <ul class='dropdown-menu' style='display: block' *ngIf='dropDownOpened'>\n            <li *ngFor='let option of options'>\n                <a (click)='onClickOption(option)'>{{ option }}</a>\n            </li>\n        </ul>\n        </div>\n    "
    })
], SelectComponent);
exports.SelectComponent = SelectComponent;
//# sourceMappingURL=select.component.js.map