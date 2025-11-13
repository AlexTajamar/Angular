import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Container } from './components/container/container';
const routes: Routes = [{ path: '', component: Container }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
