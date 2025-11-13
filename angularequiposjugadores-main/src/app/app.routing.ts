import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { EquiposComponent } from './components/equipos-component/equipos-component';
import { JugadoresComponent } from './components/jugadores-component/jugadores-component';
import { DatosEquipoComponent } from './components/datos-equipo-component/datos-equipo-component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "equipos/:idequipo", component: EquiposComponent },
  { path: "jugadores/:search", component: JugadoresComponent},
  { path: "equiposdelay/:idequipo", component: DatosEquipoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
