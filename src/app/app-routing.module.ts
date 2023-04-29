import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './componentes/main/main.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ListaComponent } from './componentes/lista/lista.component';

const routes: Routes = [
  {path:'main', component:  MainComponent},
  {path:'registro', component: RegistroComponent},
  {path: 'lista', component: ListaComponent},
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: '**', component: MainComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
