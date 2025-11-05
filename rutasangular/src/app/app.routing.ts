import { HomeComponent } from './components/home.component/home.component';
import { Cine } from './components/cine/cine';
import { Musica } from './components/musica/musica';
import { Route, RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { DobleNumero } from './components/doble-numero/doble-numero';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cine', component: Cine },
  { path: 'musica', component: Musica },
    { path: 'doble/:num', component: DobleNumero },
];

export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
