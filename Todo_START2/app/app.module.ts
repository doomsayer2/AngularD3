import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { TodoAddComponent } from './todo-add.component';

import { PanelModule } from './panel/panel.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    PanelModule
  ],
  declarations: [
    AppComponent,
    TodoAddComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
