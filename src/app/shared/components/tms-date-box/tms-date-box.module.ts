import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TmsDateBoxComponent} from "./tms-date-box.component";
import {DxDateBoxModule} from "devextreme-angular";

@NgModule({
  declarations: [TmsDateBoxComponent],
  exports: [TmsDateBoxComponent],
  imports: [CommonModule, DxDateBoxModule],
})
export class TmsDateBoxModule {}
