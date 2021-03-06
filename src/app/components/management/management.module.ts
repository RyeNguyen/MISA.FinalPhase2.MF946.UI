import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ManagementComponent} from './management.component';

import {TmsProjectModule} from '../tms-project/tms-project.module';
import {TmsDashboardModule} from '../tms-dashboard/tms-dashboard.module';
import {ManagementRoutingModule} from './management-routing.module';

@NgModule({
  declarations: [
    ManagementComponent
  ],
  exports: [
    ManagementComponent
  ],
  imports: [
    CommonModule,
    ManagementRoutingModule,
    TmsProjectModule,
    TmsDashboardModule
  ]
})

export class ManagementModule {
}
