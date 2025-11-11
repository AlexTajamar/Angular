import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDepartamentos } from './components/home-departamentos/home-departamentos';
import { CreateDepartamentos } from './components/create-deaprtamentos/create-deaprtamentos';
import { DetailsDepartamentos } from './components/details-departamentos/details-departamentos';

const routes: Routes = [
  { path: '', component: HomeDepartamentos },
  { path: 'dept', component: CreateDepartamentos },
  { path: 'details/:id/:nombre/:localidad', component: DetailsDepartamentos },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
