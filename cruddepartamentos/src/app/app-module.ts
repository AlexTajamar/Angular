import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MenuDepartamentos } from './components/menu-departamentos/menu-departamentos';
import { HomeDepartamentos } from './components/home-departamentos/home-departamentos';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { ServiciosDepartamentos } from './services/services.departamentos';
import { CreateDepartamentos } from './components/create-deaprtamentos/create-deaprtamentos';
import { DetailsDepartamentos } from './components/details-departamentos/details-departamentos';

@NgModule({
  declarations: [App, MenuDepartamentos, HomeDepartamentos, CreateDepartamentos, DetailsDepartamentos],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient(), ServiciosDepartamentos],
  bootstrap: [App],
})
export class AppModule {}
