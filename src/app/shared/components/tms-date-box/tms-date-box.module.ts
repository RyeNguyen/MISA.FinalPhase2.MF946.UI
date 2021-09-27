import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {TmsDateBoxComponent} from "./tms-date-box.component";
import {DxDateBoxModule} from "devextreme-angular";

@NgModule({
  declarations: [TmsDateBoxComponent],
  exports: [TmsDateBoxComponent],
  imports: [BrowserModule, DxDateBoxModule],
})
export class TmsDateBoxModule {}
