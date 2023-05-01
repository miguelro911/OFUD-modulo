import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAllComponent } from './components/list-all/list-all.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path: 'list-all',
    component: ListAllComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
