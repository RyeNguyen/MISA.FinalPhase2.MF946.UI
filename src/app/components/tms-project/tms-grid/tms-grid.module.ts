import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {TmsGridComponent} from "./tms-grid.component";

import {DxDataGridModule} from "devextreme-angular";
import { TmsGridSidebarComponent } from './tms-grid-sidebar/tms-grid-sidebar.component';

@NgModule({
  declarations: [
    TmsGridComponent,
    TmsGridSidebarComponent
  ],
  exports: [
    TmsGridComponent
  ],
  imports: [
    BrowserModule,
    DxDataGridModule
  ]
})

export class TmsGridModule {
}
