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
// This module is used in order to import jsonp format from wikipedia (a json with a function).
var http_1 = require("@angular/http");
var ResultsComponent = (function () {
    function ResultsComponent(_route, _jsonp) {
        this._route = _route;
        this._jsonp = _jsonp;
        this.results = [];
    }
    ResultsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get the parameters from the URL as an Observable
        this._route.params.forEach(function (params) {
            _this.search = params['search'];
            _this.results = []; // Empty array before new search param.
            var url = new http_1.URLSearchParams('https://de.wikipedia.org/w/api.php?');
            url.set('action', 'query');
            url.set('list', 'search');
            url.set('srsearch', _this.search);
            url.set('format', 'json');
            url.set('callback', 'JSONP_CALLBACK');
            /* let url = 'https://de.wikipedia.org/w/api.php?action=query&list=search&srsearch=Berlin&format=json&callback=JSONP_CALLBACK'; */
            // We get an observable back which we loop over with forEach.
            _this._jsonp.get(url.toString()).forEach(function (response) {
                var results = response.json()['query']['search'];
                for (var _i = 0, results_1 = results; _i < results_1.length; _i++) {
                    var result = results_1[_i];
                    _this.results.push(result['title']);
                }
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
        http_1.Jsonp])
], ResultsComponent);
exports.ResultsComponent = ResultsComponent;
//# sourceMappingURL=results.component.js.map