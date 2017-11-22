"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
require("./rxjs-operators");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var navigation_component_1 = require("./elements/navigation.component");
var not_found_component_1 = require("./pages/not-found.component");
var results_component_1 = require("./pages/results.component");
var landing_component_1 = require("./pages/landing.component");
var panel_module_1 = require("./panel/panel.module");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.JsonpModule,
            panel_module_1.PanelModule,
            router_1.RouterModule.forRoot([
                { path: '', component: landing_component_1.LandingComponent },
                { path: 'results/:search', component: results_component_1.ResultsComponent },
                { path: '**', component: not_found_component_1.NotFoundComponent },
            ], {
                useHash: true
            })
        ],
        declarations: [
            app_component_1.AppComponent,
            results_component_1.ResultsComponent,
            not_found_component_1.NotFoundComponent,
            landing_component_1.LandingComponent,
            navigation_component_1.NavigationComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map