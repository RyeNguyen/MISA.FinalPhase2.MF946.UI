import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import {TmsChartDoughnutComponent} from "./tms-chart-doughnut.component";
import {DxPieChartModule} from 'devextreme-angular';

@NgModule({
  declarations: [TmsChartDoughnutComponent],
  exports: [TmsChartDoughnutComponent],
  imports: [CommonModule, DxPieChartModule],
})
export class TmsChartDoughnutModule {
}
