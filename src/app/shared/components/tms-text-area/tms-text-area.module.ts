import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DxTextAreaModule } from 'devextreme-angular';

import { TmsTextAreaComponent } from './tms-text-area.component';

@NgModule({
  declarations: [TmsTextAreaComponent],
  exports: [TmsTextAreaComponent],
  imports: [CommonModule, DxTextAreaModule],
})
export class TmsTextAreaModule {}
