import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TmsPopupModalFooterComponent} from "./tms-popup-modal-footer.component";
import {TmsButtonModule} from "../../tms-button/tms-button.module";

@NgModule({
  declarations: [
    TmsPopupModalFooterComponent
  ],
  exports: [
    TmsPopupModalFooterComponent
  ],
  imports: [
    CommonModule,
    TmsButtonModule
  ],
})
export class TmsPopupModalFooterModule {}
