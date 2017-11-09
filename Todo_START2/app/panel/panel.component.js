"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var PanelComponent = (function () {
    function PanelComponent() {
    }
    return PanelComponent;
}());
PanelComponent = __decorate([
    core_1.Component({
        selector: 'my-panel',
        template: "\n    <div class='panel panel-default'>\n    <div class='panel-heading'>\n        <h3 class='panel-title'>\n            <ng-content select='my-panel-title'></ng-content>\n        </h3>\n    </div>\n    <div class='panel-body'>\n        <ng-content select='my-panel-content'></ng-content>\n    </div>\n    </div>\n    "
    })
], PanelComponent);
exports.PanelComponent = PanelComponent;
//# sourceMappingURL=panel.component.js.map