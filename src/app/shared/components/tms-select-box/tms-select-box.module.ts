import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {TmsSelectBoxComponent} from "./tms-select-box.component";
import {DxSelectBoxModule} from "devextreme-angular";

@NgModule({
  declarations: [TmsSelectBoxComponent],
  exports: [TmsSelectBoxComponent],
  imports: [BrowserModule, DxSelectBoxModule],
})
export class TmsSelectBoxModule {}
