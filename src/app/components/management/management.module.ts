import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {ManagementComponent} from './management.component';

import {TmsProjectModule} from '../tms-project/tms-project.module';
import {TmsDashboardModule} from '../tms-dashboard/tms-dashboard.module';
import {TmsPopupModalModule} from "../../shared/components/tms-popup-modal/tms-popup-modal.module";
import {ManagementRoutingModule} from './management-routing.module';

@NgModule({
  declarations: [
    ManagementComponent
  ],
  exports: [
    ManagementComponent
  ],
  imports: [
    BrowserModule,
    ManagementRoutingModule,
    TmsProjectModule,
    TmsDashboardModule,
    TmsPopupModalModule
  ]
})

export class ManagementModule {
}
