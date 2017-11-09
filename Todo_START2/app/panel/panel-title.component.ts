import { Component, Input } from '@angular/core';

@Component({
    selector: 'my-panel-title',
    template: `<div><ng-content></ng-content></div>`
})
export class PanelTitleComponent {

}