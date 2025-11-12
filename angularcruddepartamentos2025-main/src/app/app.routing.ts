import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartamentosComponent } from './components/departamentos-component/departamentos-component';
import { CreateComponent } from './components/create-component/create-component';
import { DetailsComponent } from './components/details-component/details-component';
import { Edit } from './components/edit/edit';

const routes: Routes = [
  { path: '', component: DepartamentosComponent },
  { path: 'create', component: CreateComponent },
  { path: 'details/:id/:nombre/:localidad', component: DetailsComponent },
  { path: 'edit/:id', component: Edit },
  { path: 'delete/:id', component: DepartamentosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
