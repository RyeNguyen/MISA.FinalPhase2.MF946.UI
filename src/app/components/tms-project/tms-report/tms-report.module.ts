import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

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
    CommonModule,
    DxChartModule
  ]
})

export class TmsReportModule {
}
