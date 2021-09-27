import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import {TmsHeaderComponent} from "./tms-header.component";

import {ManagementRoutingModule} from "../management/management-routing.module";
import {TmsPopupModalModule} from "../../shared/components/tms-popup-modal/tms-popup-modal.module";
import {TmsPopupModalDepartmentModule} from "../tms-popup-modal-department/tms-popup-modal-department.module";
import {TmsPopupModalProjectModule} from "../tms-popup-modal-project/tms-popup-modal-project.module";
import {TmsPopupModalTaskModule} from "../tms-popup-modal-task/tms-popup-modal-task.module";

import {
  DxPopoverModule,
  DxTemplateModule,
  DxListModule
} from 'devextreme-angular';

@NgModule({
  declarations: [
    TmsHeaderComponent
  ],
  exports: [
    TmsHeaderComponent
  ],
  imports: [
    CommonModule,
    DxPopoverModule,
    DxTemplateModule,
    DxListModule,
    ManagementRoutingModule,
    TmsPopupModalModule,
    TmsPopupModalDepartmentModule,
    TmsPopupModalProjectModule,
    TmsPopupModalTaskModule
  ]
})

export class TmsHeaderModule {
}
