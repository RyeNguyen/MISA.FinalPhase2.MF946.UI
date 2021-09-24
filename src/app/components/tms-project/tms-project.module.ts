import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {TmsProjectComponent} from "./tms-project.component";
import {TmsGridModule} from './tms-grid/tms-grid.module';
import {TmsHeaderModule} from "../tms-header/tms-header.module";

@NgModule({
  declarations: [
    TmsProjectComponent
  ],
  exports: [
    TmsProjectComponent
  ],
  imports: [
    BrowserModule,
    TmsGridModule,
    TmsHeaderModule
  ]
})

export class TmsProjectModule {
}
