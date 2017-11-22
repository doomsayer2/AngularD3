import { Component, Input } from '@angular/core';

@Component({
    selector: "my-panel",
    template: `
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">
            <ng-content select="my-panel-title"></ng-content>
          </h3>
        </div>
        <div class="panel-body">
          <ng-content select="my-panel-content"></ng-content>
        </div>
      </div>
    `
})
export class PanelComponent {

}