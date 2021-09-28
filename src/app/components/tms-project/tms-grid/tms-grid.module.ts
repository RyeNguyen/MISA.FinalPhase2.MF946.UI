import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import {TmsGridComponent} from "./tms-grid.component";
import {TmsGridSidebarComponent} from './tms-grid-sidebar/tms-grid-sidebar.component';

import {
  DxDataGridModule,
  DxPopoverModule
} from "devextreme-angular";

import {TmsChartDoughnutModule} from "../../../shared/components/tms-chart-doughnut/tms-chart-doughnut.module";
import {TmsPopupModalModule} from "../../../shared/components/tms-popup-modal/tms-popup-modal.module";
import {TmsPopupModalTaskModule} from "../../tms-popup-modal-task/tms-popup-modal-task.module";
import {TmsPopoverProgressModule} from "../../../shared/components/tms-popover-progress/tms-popover-progress.module";
import {TmsPopoverDateModule} from "../../../shared/components/tms-popover-date/tms-popover-date.module";

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
    DxPopoverModule,
    TmsChartDoughnutModule,
    TmsPopupModalModule,
    TmsPopupModalTaskModule,
    TmsPopoverProgressModule,
    TmsPopoverDateModule
  ]
})

export class TmsGridModule {
}
