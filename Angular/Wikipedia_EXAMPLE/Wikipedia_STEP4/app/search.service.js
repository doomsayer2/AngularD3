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
// This module jsonp is used in order to import jsonp format from wikipedia (a json with a function).
var http_1 = require("@angular/http");
var SearchService = (function () {
    function SearchService(_jsonp) {
        this._jsonp = _jsonp;
    }
    SearchService.prototype.search = function (term) {
        var url = new http_1.URLSearchParams('https://de.wikipedia.org/w/api.php?');
        url.set('action', 'query');
        url.set('list', 'search');
        url.set('srsearch', term);
        url.set('format', 'json');
        url.set('callback', 'JSONP_CALLBACK');
        return this._jsonp
            .get(url.toString())
            .map(function (response) {
            return response.json()['query']['search'];
        })
            .map(function (results) {
            var titles = [];
            for (var _i = 0, results_1 = results; _i < results_1.length; _i++) {
                var result = results_1[_i];
                titles.push(result['title']);
            }
            return titles;
        })
            .flatMap(function (titles) {
            return titles;
        });
    };
    return SearchService;
}());
SearchService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Jsonp])
], SearchService);
exports.SearchService = SearchService;
//# sourceMappingURL=search.service.js.map