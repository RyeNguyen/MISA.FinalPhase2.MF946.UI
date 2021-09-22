import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
  DxPopupModule,
  DxTemplateModule,
} from 'devextreme-angular';

import { TmsPopupModalComponent } from './tms-popup-modal.component';
import { TmsPopupModalDepartmentComponent } from './tms-popup-modal-department/tms-popup-modal-department.component';
import { TmsTextFieldModule } from '../tms-text-field/tms-text-field.module';
import { TmsTextAreaModule } from '../tms-text-area/tms-text-area.module';
import { TmsButtonModule } from '../tms-button/tms-button.module';
import { TmsPopupModalFooterComponent } from './tms-popup-modal-footer/tms-popup-modal-footer.component';
import { TmsPopupModalProjectComponent } from './tms-popup-modal-project/tms-popup-modal-project.component';

@NgModule({
  declarations: [
    TmsPopupModalComponent,
    TmsPopupModalDepartmentComponent,
    TmsPopupModalFooterComponent,
    TmsPopupModalProjectComponent,
  ],
  exports: [
    TmsPopupModalComponent,
  ],
  imports: [
    BrowserModule,
    DxPopupModule,
    DxTemplateModule,
    TmsTextFieldModule,
    TmsTextAreaModule,
    TmsButtonModule
  ],
})
export class TmsPopupModalModule {}
