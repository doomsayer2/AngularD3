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
var search_service_1 = require("../search.service");
var ResultsComponent = (function () {
    function ResultsComponent(_route, _searchService) {
        this._route = _route;
        this._searchService = _searchService;
        this.results = [];
    }
    ResultsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get the parameters from the URL as an Observable
        this._route.params.forEach(function (params) {
            _this.search = params['search'];
            _this.results = []; // Clear the previous entries.
            _this._searchService.search(_this.search).forEach(function (item) {
                console.log(item);
                _this.results.push(item);
            });
        });
    };
    return ResultsComponent;
}());
ResultsComponent = __decorate([
    core_1.Component({
        selector: 'my-results',
        template: "\n      <div class='container'>\n        Results for {{search}}\n        <ul>\n          <li *ngFor='let result of results'>\n            {{result}}\n          </li>\n        </ul>\n      </div>\n    "
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        search_service_1.SearchService])
], ResultsComponent);
exports.ResultsComponent = ResultsComponent;
//# sourceMappingURL=results.component.js.map