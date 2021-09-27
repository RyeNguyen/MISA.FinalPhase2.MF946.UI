import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {TmsReportComponent} from "./tms-report.component";
import {DxChartModule} from "devextreme-angular";

@NgModule({
  declarations: [
    TmsReportComponent
  ],
  exports: [
    TmsReportComponent
  ],
  imports: [
    BrowserModule,
    DxChartModule
  ]
})

export class TmsReportModule {
}
