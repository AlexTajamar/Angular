import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { provideHttpClient } from '@angular/common/http';
import { PersonasapiComponent } from './components/personasapi.component/personasapi.component';
import { ServicioPersonas } from './services/service.persona';

@NgModule({
  declarations: [App, PersonasapiComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient(), ServicioPersonas],
  bootstrap: [App],
})
export class AppModule {}
