import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TmsPopupModalProjectComponent} from "./tms-popup-modal-project.component";
import {TmsUserListModule} from "../../shared/components/tms-user-list/tms-user-list.module";
import {TmsTextFieldModule} from "../../shared/components/tms-text-field/tms-text-field.module";
import {TmsTextAreaModule} from "../../shared/components/tms-text-area/tms-text-area.module";
import {TmsSelectBoxModule} from "../../shared/components/tms-select-box/tms-select-box.module";
import {TmsDateBoxModule} from "../../shared/components/tms-date-box/tms-date-box.module";
import {TmsPopupModalFooterModule} from "../../shared/components/tms-popup-modal/tms-popup-modal-footer/tms-popup-modal-footer.module";
import {TmsPopupModalModule} from "../../shared/components/tms-popup-modal/tms-popup-modal.module";
import {TmsPopupModalMemberModule} from "../tms-popup-modal-member/tms-popup-modal-member.module";

@NgModule({
  declarations: [
    TmsPopupModalProjectComponent,
  ],
  exports: [
    TmsPopupModalProjectComponent,
  ],
  imports: [
    CommonModule,
    TmsUserListModule,
    TmsTextFieldModule,
    TmsTextAreaModule,
    TmsSelectBoxModule,
    TmsDateBoxModule,
    TmsPopupModalModule,
    TmsPopupModalFooterModule,
    TmsPopupModalMemberModule
  ],
})
export class TmsPopupModalProjectModule {}
