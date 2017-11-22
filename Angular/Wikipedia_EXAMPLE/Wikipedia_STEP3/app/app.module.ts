import './rxjs-operators';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { JsonpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { NavigationComponent } from './elements/navigation.component';
import { NotFoundComponent } from './pages/not-found.component';
import { ResultsComponent }  from './pages/results.component';
import { LandingComponent }  from './pages/landing.component';

import { PanelModule } from './panel/panel.module';
import { SearchService } from './search.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    JsonpModule,
    PanelModule,
    RouterModule.forRoot([
      {path: '', component: LandingComponent},    // Starting page
      {path: 'results/:search', component: ResultsComponent},   // Result page
      {path: '**', component: NotFoundComponent},   // Page shown when no other is found
    ], {
      useHash: true
    })
  ],
  declarations: [
    AppComponent,
    ResultsComponent,
    NotFoundComponent,
    LandingComponent,
    NavigationComponent
  ],
  providers: [ SearchService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
