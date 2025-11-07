import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProvider } from './app.routing';
import { App } from './app';
import { ListaProductosComponent } from './components/lista.productos.component/lista.productos.component';
import { MenuComponent } from './components/menu.component/menu.component';
import { HijoCocheComponent } from './components/hijo.coche.component/hijo.coche.component';
import { PadreCochesComponent } from './components/padre-coches.component/padre-coches.component';
import { PadreDeportesComponent } from './components/padre-deportes.component/padre-deportes.component';
import { HijoDeporteComponent } from './components/hijo-deporte.component/hijo-deporte.component';
import { LibreriaComponent } from './components/libreria-component/libreria-component';
import { ComicComponent } from './components/comic-component/comic-component';

@NgModule({
  declarations: [
    App,
    ListaProductosComponent,
    MenuComponent,
    HijoCocheComponent,
    PadreCochesComponent,
    PadreDeportesComponent,
    HijoDeporteComponent,
    LibreriaComponent,
    ComicComponent
  ],
  imports: [
    BrowserModule, routing, FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(), appRoutingProvider
  ],
  bootstrap: [App]
})
export class AppModule { }
