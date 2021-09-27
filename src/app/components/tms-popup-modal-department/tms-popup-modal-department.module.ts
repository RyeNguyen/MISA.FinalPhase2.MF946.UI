import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {TmsPopupModalDepartmentComponent} from "./tms-popup-modal-department.component";
import {TmsUserListModule} from "../../shared/components/tms-user-list/tms-user-list.module";
import {TmsTextFieldModule} from "../../shared/components/tms-text-field/tms-text-field.module";
import {TmsPopupModalFooterModule} from "../../shared/components/tms-popup-modal/tms-popup-modal-footer/tms-popup-modal-footer.module";
import {TmsPopupModalModule} from "../../shared/components/tms-popup-modal/tms-popup-modal.module";
import {TmsPopupModalMemberModule} from "../tms-popup-modal-member/tms-popup-modal-member.module";

@NgModule({
  declarations: [
    TmsPopupModalDepartmentComponent
  ],
  exports: [
    TmsPopupModalDepartmentComponent
  ],
  imports: [
    BrowserModule,
    TmsUserListModule,
    TmsTextFieldModule,
    TmsPopupModalFooterModule,
    TmsPopupModalModule,
    TmsPopupModalMemberModule
  ],
})
export class TmsPopupModalDepartmentModule {}
