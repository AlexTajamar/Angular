import { Listaproductos } from './component/listaproductos/listaproductos';
import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // <-- 1. IMPORT IT
import { App } from './app';
import { appRoutingProvider, routing } from '../app.routing';
import { Header } from './component/listaproductos/header/header';

@NgModule({
  declarations: [App, Listaproductos, Header],
  imports: [BrowserModule, RouterModule, routing],
  providers: [provideBrowserGlobalErrorListeners(), appRoutingProvider],
  bootstrap: [App],
})
export class AppModule {}
