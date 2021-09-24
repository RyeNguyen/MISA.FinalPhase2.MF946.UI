import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TmsDashboardComponent} from '../tms-dashboard/tms-dashboard.component';
import {TmsProjectComponent} from "../tms-project/tms-project.component";

const routes: Routes = [
  {path: 'project', component: TmsProjectComponent},
  //{path: 'department', component: TmsDepartmentComponent},
  // { path: 'detail/:id', component: HeroDetailComponent },
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
