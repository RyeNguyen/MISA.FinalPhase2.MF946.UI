import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TmsPopoverProgressComponent} from "./tms-popover-progress.component";
import {TmsTextFieldModule} from "../tms-text-field/tms-text-field.module";
import {TmsButtonModule} from "../tms-button/tms-button.module";
import {DxPopoverModule, DxSliderModule} from "devextreme-angular";

@NgModule({
  declarations: [TmsPopoverProgressComponent],
  exports: [TmsPopoverProgressComponent],
  imports: [
    CommonModule,
    TmsTextFieldModule,
    TmsButtonModule,
    DxPopoverModule,
    DxSliderModule
  ],
})
export class TmsPopoverProgressModule {}
