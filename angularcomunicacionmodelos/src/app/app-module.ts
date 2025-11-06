// --- OTRAS IMPORTACIONES ---
import { Listaproductos } from './component/listaproductos/listaproductos';
import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { appRoutingProvider, routing } from '../app.routing';

import { HijoCoche } from './component/hijo-coche/hijo-coche';
import { PadreCoche } from './component/padre-coche/padre-coche';
import { PadreDeportes } from './component/padre-deportes/padre-deportes';
import { HijoDeportes } from './component/hijo-deportes/hijo-deportes';
import { Header } from './component/listaproductos/header/header';

@NgModule({
  declarations: [App, Listaproductos, Header, HijoCoche, PadreCoche, PadreDeportes, HijoDeportes],

  imports: [BrowserModule, routing],

  providers: [provideBrowserGlobalErrorListeners(), appRoutingProvider],
  bootstrap: [App],
})
export class AppModule {}
