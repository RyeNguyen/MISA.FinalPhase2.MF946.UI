import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DxButtonModule } from 'devextreme-angular';

import { TmsButtonComponent } from './tms-button.component';

@NgModule({
  declarations: [TmsButtonComponent],
  exports: [TmsButtonComponent],
  imports: [CommonModule, DxButtonModule],
})
export class TmsButtonModule {}
