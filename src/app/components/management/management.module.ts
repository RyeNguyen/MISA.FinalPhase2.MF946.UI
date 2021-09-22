import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {ManagementComponent} from './management.component';
import {TmsProjectComponent} from '../tms-project/tms-project.component';

import {TmsHeaderModule} from "../tms-header/tms-header.module";
import {TmsDashboardModule} from '../tms-dashboard/tms-dashboard.module';
import {TmsPopupModalModule} from "../../shared/components/tms-popup-modal/tms-popup-modal.module";
import {ManagementRoutingModule} from './management-routing.module';

@NgModule({
  declarations: [
    ManagementComponent,
    TmsProjectComponent
  ],
  exports: [
    ManagementComponent
  ],
  imports: [
    BrowserModule,
    ManagementRoutingModule,
    TmsHeaderModule,
    TmsDashboardModule,
    TmsPopupModalModule
  ]
})

export class ManagementModule {
}
