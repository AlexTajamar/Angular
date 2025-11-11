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
import { Plantillafuncionsimple } from './components/plantillafuncionsimple/plantillafuncionsimple';
import { ServicioPlantilla } from './services/service.plantilla';
import { RouterModule } from '@angular/router'; // <-- Importado correctamente
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PlantillafuncionMultiple } from './components/plantillafuncion-multiple/plantillafuncion-multiple'; // <-- 1. IMPORTA FormsModule

@NgModule({
  declarations: [
    App,
    PersonasapiComponent,
    CocheComponent,
    Plantillafuncionsimple,
    PlantillafuncionMultiple,
  ],
  imports: [
    BrowserModule, // <-- Importado solo una vez
    AppRoutingModule,
    PersonasStandaloneTrue, // <-- Componente Standalone (esto está bien)
    RouterModule, // <-- Importación correcta
    CommonModule,
    FormsModule, // <-- 2. AÑADE FormsModule aquí
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    ServicioPersonas,
    ServicioCoches,
    ServicioPlantilla,
  ],
  bootstrap: [App],
})
export class AppModule {}
