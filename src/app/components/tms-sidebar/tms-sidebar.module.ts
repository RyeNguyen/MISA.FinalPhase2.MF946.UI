import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {DxTextBoxModule} from "devextreme-angular";

import {TmsSidebarComponent} from "./tms-sidebar.component";
import {TmsSidebarTextboxComponent} from "./tms-sidebar-textbox/tms-sidebar-textbox.component";

@NgModule({
  declarations: [
    TmsSidebarComponent,
    TmsSidebarTextboxComponent
  ],
  exports: [
    TmsSidebarComponent,
    TmsSidebarTextboxComponent
  ],
  imports: [
    BrowserModule,
    DxTextBoxModule
  ]
})

export class TmsSidebarModule {
}
