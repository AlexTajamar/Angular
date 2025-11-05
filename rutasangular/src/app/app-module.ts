import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // <-- 1. IMPORT IT
import { App } from './app';
import { Cine } from './components/cine/cine';
import { Musica } from './components/musica/musica';
import { Header } from './components/header/header';
import { HomeComponent } from './components/home.component/home.component';
import { routing, appRoutingProvider } from './app.routing';
import { DobleNumero } from './components/doble-numero/doble-numero';

@NgModule({
  declarations: [App, Cine, Musica, Header, HomeComponent, DobleNumero],
  imports: [BrowserModule, RouterModule, routing],
  providers: [provideBrowserGlobalErrorListeners(), appRoutingProvider],
  bootstrap: [App],
})
export class AppModule {}
