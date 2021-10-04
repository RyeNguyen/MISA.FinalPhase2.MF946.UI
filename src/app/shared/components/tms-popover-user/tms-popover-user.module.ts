import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TmsPopoverUserComponent} from "./tms-popover-user.component";
import {TmsTextFieldModule} from "../tms-text-field/tms-text-field.module";
import {TmsButtonModule} from "../tms-button/tms-button.module";
import {DxPopoverModule} from "devextreme-angular";

@NgModule({
  declarations: [TmsPopoverUserComponent],
  exports: [TmsPopoverUserComponent],
  imports: [
    CommonModule,
    TmsTextFieldModule,
    TmsButtonModule,
    DxPopoverModule
  ]
})
export class TmsPopoverUserModule {
}
