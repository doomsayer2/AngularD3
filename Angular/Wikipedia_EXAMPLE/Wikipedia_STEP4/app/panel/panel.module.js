"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var panel_component_1 = require("./panel.component");
var panel_content_component_1 = require("./panel-content.component");
var panel_title_component_1 = require("./panel-title.component");
var PanelModule = (function () {
    function PanelModule() {
    }
    return PanelModule;
}());
PanelModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule
        ],
        declarations: [
            panel_component_1.PanelComponent,
            panel_content_component_1.PanelContentComponent,
            panel_title_component_1.PanelTitleComponent
        ],
        exports: [
            panel_component_1.PanelComponent,
            panel_content_component_1.PanelContentComponent,
            panel_title_component_1.PanelTitleComponent
        ]
    })
], PanelModule);
exports.PanelModule = PanelModule;
//# sourceMappingURL=panel.module.js.map