import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {TmsHeaderComponent} from "./tms-header.component";
import {
  DxPopoverModule,
  DxTemplateModule,
  DxListModule
} from 'devextreme-angular';

@NgModule({
  declarations: [
    TmsHeaderComponent
  ],
  exports: [
    TmsHeaderComponent
  ],
  imports: [
    BrowserModule,
    DxPopoverModule,
    DxTemplateModule,
    DxListModule
  ]
})

export class TmsHeaderModule {
}
