import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TmsDashboardComponent} from '../tms-dashboard/tms-dashboard.component';
import {TmsProjectComponent} from "../tms-project/tms-project.component";
import {ManagementComponent} from "./management.component";

const routes: Routes = [
  {
    path: '', component: ManagementComponent, children: [
      {path: 'project', component: TmsProjectComponent},
      {path: 'dashboard', component: TmsDashboardComponent},
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ManagementRoutingModule {
}
