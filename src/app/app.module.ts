import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManagementComponent } from './components/management/management.component';
import { TmsProjectComponent } from './components/tms-project/tms-project.component';
import { TmsDashboardComponent } from './components/tms-dashboard/tms-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ManagementComponent,
    TmsProjectComponent,
    TmsDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [  
    ManagementComponent
  ]
})
export class AppModule { }
