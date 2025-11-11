import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { provideHttpClient } from '@angular/common/http';
import { PersonasapiComponent } from './components/personasapi.component/personasapi.component';
import { ServicioPersonas } from './services/service.persona';
import { PersonasStandaloneTrue } from './components/personas-standalone-true/personas-standalone-true';
import { ServicioCoches } from './services/services.coches';
import { CocheComponent } from './components/coche-component/coche-component';

@NgModule({
  declarations: [App, PersonasapiComponent, CocheComponent],
  imports: [BrowserModule, AppRoutingModule, PersonasStandaloneTrue],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    ServicioPersonas,
    ServicioCoches,
  ],
  bootstrap: [App],
})
export class AppModule {}
