import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TmsPopupModalMemberComponent} from "./tms-popup-modal-member.component";
import {TmsTextFieldModule} from "../../shared/components/tms-text-field/tms-text-field.module";
import {TmsPopupModalFooterModule} from "../../shared/components/tms-popup-modal/tms-popup-modal-footer/tms-popup-modal-footer.module";
import {DxDataGridModule} from "devextreme-angular";

@NgModule({
  declarations: [
    TmsPopupModalMemberComponent
  ],
  exports: [
    TmsPopupModalMemberComponent
  ],
  imports: [
    CommonModule,
    TmsTextFieldModule,
    TmsPopupModalFooterModule,
    DxDataGridModule
  ],
})
export class TmsPopupModalMemberModule {}
