import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    BrowserModule,
    TmsButtonModule
  ],
})
export class TmsPopupModalFooterModule {}
