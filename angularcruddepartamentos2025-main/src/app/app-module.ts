import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing';
import { App } from './app';
import { MenuComponent } from './components/menu-component/menu-component';
import { DepartamentosComponent } from './components/departamentos-component/departamentos-component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import ServiceDepartamentos from './services/service.departamentos';
import { CreateComponent } from './components/create-component/create-component';
import { DetailsComponent } from './components/details-component/details-component';
import { Edit } from './components/edit/edit';

@NgModule({
  declarations: [
    App,
    MenuComponent,
    DepartamentosComponent,
    CreateComponent,
    DetailsComponent,
    Edit
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ServiceDepartamentos,
    provideHttpClient(),
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
