import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing';
import { App } from './app';
import { HomeComponent } from './components/home-component/home-component';
import { EquiposComponent } from './components/equipos-component/equipos-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import ServiceFutbol from './services/service.futbol';
import { DatosEquipoComponent } from './components/datos-equipo-component/datos-equipo-component';

@NgModule({
  declarations: [
    App,
    HomeComponent,
    EquiposComponent,
    MenuComponent,
    DatosEquipoComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ServiceFutbol,
    provideHttpClient(),
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
