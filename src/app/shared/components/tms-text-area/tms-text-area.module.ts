import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DxTextAreaModule } from 'devextreme-angular';

import { TmsTextAreaComponent } from './tms-text-area.component';

@NgModule({
  declarations: [TmsTextAreaComponent],
  exports: [TmsTextAreaComponent],
  imports: [BrowserModule, DxTextAreaModule],
})
export class TmsTextAreaModule {}
