import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PanelComponent } from './panel.component';
import { PanelContentComponent } from './panel-content.component';
import { PanelTitleComponent } from './panel-title.component';

@NgModule({
    imports: [ 
        BrowserModule
    ],
    declarations: [
        PanelComponent,
        PanelContentComponent,
        PanelTitleComponent
    ],
    exports: [
        PanelComponent,
        PanelContentComponent,
        PanelTitleComponent
    ]
})
export class PanelModule {

}