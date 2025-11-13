import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ListaEquipo } from './components/lista-equipo/lista-equipo';
import { ListaJugadores } from './components/lista-jugadores/lista-jugadores';
import { Header } from './components/header/header';
import { Container } from './components/container/container';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { ServiceFutbol } from './services/service.futbol';

@NgModule({
  declarations: [App, ListaJugadores, Header, ListaEquipo, Container],
  imports: [BrowserModule, AppRoutingModule, CommonModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient(), ServiceFutbol],
  bootstrap: [App],
})
export class AppModule {}
