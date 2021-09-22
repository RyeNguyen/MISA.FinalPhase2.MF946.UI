import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {
  DxPopupModule,
  DxTextBoxModule,
  DxTemplateModule
} from 'devextreme-angular';

import {TmsPopupModalComponent} from "./tms-popup-modal.component";
import {TmsPopupModalDepartmentComponent} from './tms-popup-modal-department/tms-popup-modal-department.component';
import {TmsTextFieldComponent} from "../tms-text-field/tms-text-field.component";

@NgModule({
  declarations: [
    TmsPopupModalComponent,
    TmsPopupModalDepartmentComponent,
    TmsTextFieldComponent
  ],
  exports: [
    TmsPopupModalComponent,
    TmsTextFieldComponent
  ],
  imports: [
    BrowserModule,
    DxPopupModule,
    DxTextBoxModule,
    DxTemplateModule
  ]
})

export class TmsPopupModalModule {
}
