import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TmsDashboardComponent} from '../tms-dashboard/tms-dashboard.component';
import {TmsProjectComponent} from "../tms-project/tms-project.component";

const routes: Routes = [
  //{path: 'project', redirectTo: '/project/2', pathMatch: 'full'},
  //{path: 'department', component: TmsDepartmentComponent},
  // {path: 'project/:id', component: TmsProjectComponent},
  {path: 'project', component: TmsProjectComponent},
  {path: 'dashboard', component: TmsDashboardComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class ManagementRoutingModule {
}
