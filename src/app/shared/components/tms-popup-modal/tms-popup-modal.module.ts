import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {DxPopupModule, DxTemplateModule,} from 'devextreme-angular';

import {TmsPopupModalComponent} from './tms-popup-modal.component';

@NgModule({
  declarations: [
    TmsPopupModalComponent
  ],
  exports: [
    TmsPopupModalComponent,
  ],
  imports: [
    BrowserModule,
    DxPopupModule,
    DxTemplateModule,
  ],
})
export class TmsPopupModalModule {
}
