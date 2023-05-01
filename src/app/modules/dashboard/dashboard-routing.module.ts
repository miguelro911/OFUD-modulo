import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from 'src/app/shared/components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'admin',
        loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule)
      },
      {
        path: 'student',
        loadChildren: () => import('./pages/student/student.module').then(m => m.StudentModule)
      },
      {
        path: '',
        component: HomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
