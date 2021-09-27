import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TmsUserListComponent} from "./tms-user-list.component";
import {DxScrollViewModule} from "devextreme-angular";

@NgModule({
  declarations: [TmsUserListComponent],
  exports: [TmsUserListComponent],
  imports: [CommonModule, DxScrollViewModule],
})
export class TmsUserListModule {}
