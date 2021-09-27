import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {DxTextBoxModule} from "devextreme-angular";

import {TmsSidebarComponent} from "./tms-sidebar.component";
import {TmsSidebarTextboxComponent} from "./tms-sidebar-textbox/tms-sidebar-textbox.component";
import { TmsSidebarDropdownComponent } from './tms-sidebar-dropdown/tms-sidebar-dropdown.component';

import {ManagementRoutingModule} from "../management/management-routing.module";

@NgModule({
  declarations: [
    TmsSidebarComponent,
    TmsSidebarTextboxComponent,
    TmsSidebarDropdownComponent
  ],
  exports: [
    TmsSidebarComponent,
    TmsSidebarTextboxComponent
  ],
  imports: [
    BrowserModule,
    DxTextBoxModule,
    ManagementRoutingModule
  ]
})

export class TmsSidebarModule {
}
