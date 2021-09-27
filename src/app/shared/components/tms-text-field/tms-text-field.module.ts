import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DxTextBoxModule } from 'devextreme-angular';

import { TmsTextFieldComponent } from './tms-text-field.component';

@NgModule({
  declarations: [TmsTextFieldComponent],
  exports: [TmsTextFieldComponent],
  imports: [CommonModule, DxTextBoxModule],
})
export class TmsTextFieldModule {}
