import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TmsPopupModalTaskComponent} from "./tms-popup-modal-task.component";
import {TmsTextFieldModule} from "../../shared/components/tms-text-field/tms-text-field.module";
import {TmsPopupModalFooterModule} from "../../shared/components/tms-popup-modal/tms-popup-modal-footer/tms-popup-modal-footer.module";

@NgModule({
  declarations: [
    TmsPopupModalTaskComponent,
  ],
  exports: [
    TmsPopupModalTaskComponent,
  ],
  imports: [
    CommonModule,
    TmsTextFieldModule,
    TmsPopupModalFooterModule
  ],
})
export class TmsPopupModalTaskModule {}
