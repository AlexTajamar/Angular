import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { App } from './app';
import { PrimerComponent } from './components/primer.component';
import { HookComponent } from './components/hooksangular.component';
import { DeportesComponent } from './components/Deportes.component';
import { DeportesComponentV2 } from './components/DeportesV2.componen';
import { FormularioComponent } from './components/Formularios/Formulario.component';
import { Formulario2Component } from './components/Formularios2/Formulario2.component';
import { Tablamultiplicar } from './components/tablamultiplicar/tablamultiplicar';

@NgModule({
  declarations: [
    App,
    PrimerComponent,
    HookComponent,
    DeportesComponent,
    DeportesComponentV2,
    FormularioComponent,
    Formulario2Component,
    Tablamultiplicar,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
