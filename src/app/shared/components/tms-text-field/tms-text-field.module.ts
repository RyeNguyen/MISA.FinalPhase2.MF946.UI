import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DxTextBoxModule } from 'devextreme-angular';

import { TmsTextFieldComponent } from '../tms-text-field/tms-text-field.component';

@NgModule({
  declarations: [TmsTextFieldComponent],
  exports: [TmsTextFieldComponent],
  imports: [BrowserModule, DxTextBoxModule],
})
export class TmsTextFieldModule {}
