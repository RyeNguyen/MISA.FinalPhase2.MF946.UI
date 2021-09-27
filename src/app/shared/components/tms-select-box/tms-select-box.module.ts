import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TmsSelectBoxComponent} from "./tms-select-box.component";
import {DxSelectBoxModule} from "devextreme-angular";

@NgModule({
  declarations: [TmsSelectBoxComponent],
  exports: [TmsSelectBoxComponent],
  imports: [CommonModule, DxSelectBoxModule],
})
export class TmsSelectBoxModule {}
