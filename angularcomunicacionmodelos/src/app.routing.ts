import { Route, RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { Listaproductos } from './app/component/listaproductos/listaproductos';

const appRoutes: Routes = [{ path: '', component: Listaproductos }];

export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
