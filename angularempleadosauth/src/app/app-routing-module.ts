import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './components/login/login';
import { PerfilEmpleados } from './components/perfil-empleados/perfil-empleados';
import { Subordinados } from './components/subordinados/subordinados';

const routes: Routes = [
  { path: '', component: Login },
  { path: 'perfil', component: PerfilEmpleados },
  { path: 'subordinados', component: Subordinados },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
