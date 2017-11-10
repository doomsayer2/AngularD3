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
var TimerComponent = (function () {
    // somehting out of the components context.
    function TimerComponent() {
        var _this = this;
        this.finish = new core_1.EventEmitter(); // For events we give something back to the top component so we put
        setInterval(function () {
            _this.duration -= 1;
            if (_this.duration === 0) {
                _this.finish.emit(); // Emit the event after a specific time for example.
            }
        }, 1000);
    }
    return TimerComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], TimerComponent.prototype, "duration", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TimerComponent.prototype, "finish", void 0);
TimerComponent = __decorate([
    core_1.Component({
        selector: 'my-timer',
        template: "\n    <div>\n        TimerComponent: {{ duration }}\n    </div>\n  "
    }),
    __metadata("design:paramtypes", [])
], TimerComponent);
exports.TimerComponent = TimerComponent;
//# sourceMappingURL=timer.component.js.map