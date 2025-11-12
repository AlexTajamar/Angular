import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Login } from './components/login/login';
import { PerfilEmpleados } from './components/perfil-empleados/perfil-empleados';
import { Subordinados } from './components/subordinados/subordinados';
import { ServicesEmpleado } from './services/servicios.empleados';
import { provideHttpClient } from '@angular/common/http';
import { Header } from './components/header/header';

@NgModule({
  declarations: [App, Login, PerfilEmpleados, Subordinados, Header],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient(), ServicesEmpleado],
  bootstrap: [App],
})
export class AppModule {}
