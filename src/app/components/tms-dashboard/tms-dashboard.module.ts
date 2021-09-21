import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {TmsDashboardComponent} from "./tms-dashboard.component";
import {TmsSidebarModule} from '../tms-sidebar/tms-sidebar.module';

@NgModule({
  declarations: [
    TmsDashboardComponent
  ],
  exports: [
    TmsDashboardComponent
  ],
  imports: [
    BrowserModule,
    TmsSidebarModule
  ]
})

export class TmsDashboardModule {
}
