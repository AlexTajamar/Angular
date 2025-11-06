import { Route, RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { Listaproductos } from './app/component/listaproductos/listaproductos';
import { PadreDeportes } from './app/component/padre-deportes/padre-deportes';

// en app.routing.ts
const appRoutes: Routes = [
  { path: '', component: Listaproductos },
  // Cambia esta línea:
  { path: 'padrecoches', component: Listaproductos }, // <-- Quita el '/:car'
  { path: 'padreDeportes', component: PadreDeportes }, // <-- Quita el '/:car'

  // Opcional: si quieres ambas (con y sin param):
  // { path: 'padrecoches', component: Listaproductos },
  // { path: 'padrecoches/:car', component: Listaproductos },
];

export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
