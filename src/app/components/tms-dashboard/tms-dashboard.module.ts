import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TmsDashboardComponent} from "./tms-dashboard.component";
import {TmsSidebarModule} from '../tms-sidebar/tms-sidebar.module';
import {TmsHeaderModule} from "../tms-header/tms-header.module";

@NgModule({
  declarations: [
    TmsDashboardComponent
  ],
  exports: [
    TmsDashboardComponent
  ],
  imports: [
    CommonModule,
    TmsSidebarModule,
    TmsHeaderModule
  ]
})

export class TmsDashboardModule {
}
