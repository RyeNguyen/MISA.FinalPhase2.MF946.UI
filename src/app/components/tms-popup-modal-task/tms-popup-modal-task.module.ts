import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TmsPopupModalTaskComponent} from "./tms-popup-modal-task.component";
import {TmsPopoverProgressModule} from "../../shared/components/tms-popover-progress/tms-popover-progress.module";
import {TmsPopoverDateModule} from "../../shared/components/tms-popover-date/tms-popover-date.module";
import {TmsPopupModalFooterModule} from "../../shared/components/tms-popup-modal/tms-popup-modal-footer/tms-popup-modal-footer.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    TmsPopupModalTaskComponent,
  ],
  exports: [
    TmsPopupModalTaskComponent,
  ],
  imports: [
    CommonModule,
    TmsPopoverProgressModule,
    TmsPopoverDateModule,
    TmsPopupModalFooterModule,
    FormsModule
  ],
})
export class TmsPopupModalTaskModule {
}
