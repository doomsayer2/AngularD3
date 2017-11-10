import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PanelComponent } from './panel.component';
import { PanelContentComponent } from './panel-content.component';
import { PanelTitleComponent } from './panel-title.component';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [             // Declartions are available within the module.
        PanelComponent,
        PanelContentComponent,
        PanelTitleComponent
    ],
    exports: [                  // Now the 3 components are available out of the current module.
        PanelComponent,
        PanelContentComponent,
        PanelTitleComponent
    ]
})
export class PanelModule { }
