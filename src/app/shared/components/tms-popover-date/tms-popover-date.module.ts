import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TmsPopoverDateComponent} from "./tms-popover-date.component";
import {TmsTextFieldModule} from "../tms-text-field/tms-text-field.module";
import {TmsButtonModule} from "../tms-button/tms-button.module";
import {DxPopoverModule, DxCalendarModule} from "devextreme-angular";

@NgModule({
  declarations: [TmsPopoverDateComponent],
  exports: [TmsPopoverDateComponent],
  imports: [
    CommonModule,
    DxPopoverModule,
    DxCalendarModule,
    TmsTextFieldModule,
    TmsButtonModule
  ],
})
export class TmsPopoverDateModule {}
