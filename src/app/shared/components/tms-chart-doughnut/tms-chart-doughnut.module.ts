import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {TmsChartDoughnutComponent} from "./tms-chart-doughnut.component";
import {DxPieChartModule} from 'devextreme-angular';

@NgModule({
  declarations: [TmsChartDoughnutComponent],
  exports: [TmsChartDoughnutComponent],
  imports: [BrowserModule, DxPieChartModule],
})
export class TmsChartDoughnutModule {
}
