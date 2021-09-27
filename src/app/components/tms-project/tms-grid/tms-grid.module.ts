import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import {TmsGridComponent} from "./tms-grid.component";
import {TmsGridSidebarComponent} from './tms-grid-sidebar/tms-grid-sidebar.component';

import {DxDataGridModule} from "devextreme-angular";
import {TmsChartDoughnutModule} from "../../../shared/components/tms-chart-doughnut/tms-chart-doughnut.module";
import {TmsPopupModalModule} from "../../../shared/components/tms-popup-modal/tms-popup-modal.module";
import {TmsPopupModalTaskModule} from "../../tms-popup-modal-task/tms-popup-modal-task.module";

@NgModule({
  declarations: [
    TmsGridComponent,
    TmsGridSidebarComponent
  ],
  exports: [
    TmsGridComponent,
    TmsGridSidebarComponent
  ],
  imports: [
    CommonModule,
    DxDataGridModule,
    TmsChartDoughnutModule,
    TmsPopupModalModule,
    TmsPopupModalTaskModule
  ]
})

export class TmsGridModule {
}
