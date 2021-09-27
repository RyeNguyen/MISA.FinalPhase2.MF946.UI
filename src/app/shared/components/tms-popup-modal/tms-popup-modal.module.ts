import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

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
    CommonModule,
    DxPopupModule,
    DxTemplateModule,
  ],
})
export class TmsPopupModalModule {
}
