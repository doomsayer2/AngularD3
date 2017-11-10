import { Component, Input } from '@angular/core';

@Component({
    selector: 'my-panel-content',
    template: `<div><ng-content></ng-content></div>`
})
export class PanelContentComponent {

}