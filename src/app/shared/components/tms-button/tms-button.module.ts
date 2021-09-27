import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DxButtonModule } from 'devextreme-angular';

import { TmsButtonComponent } from './tms-button.component';

@NgModule({
  declarations: [TmsButtonComponent],
  exports: [TmsButtonComponent],
  imports: [BrowserModule, DxButtonModule],
})
export class TmsButtonModule {}
