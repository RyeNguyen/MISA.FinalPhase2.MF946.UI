import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {TmsUserListComponent} from "./tms-user-list.component";
import {DxScrollViewModule} from "devextreme-angular";

@NgModule({
  declarations: [TmsUserListComponent],
  exports: [TmsUserListComponent],
  imports: [BrowserModule, DxScrollViewModule],
})
export class TmsUserListModule {}
