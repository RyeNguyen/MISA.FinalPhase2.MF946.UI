import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import {TmsProjectComponent} from "./tms-project.component";
import {TmsGridModule} from './tms-grid/tms-grid.module';
import {TmsHeaderModule} from "../tms-header/tms-header.module";
import {TmsReportModule} from "./tms-report/tms-report.module";

@NgModule({
  declarations: [
    TmsProjectComponent
  ],
  exports: [
    TmsProjectComponent
  ],
  imports: [
    CommonModule,
    TmsGridModule,
    TmsHeaderModule,
    TmsReportModule
  ]
})

export class TmsProjectModule {
}
