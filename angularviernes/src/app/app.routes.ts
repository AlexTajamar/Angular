// src/app/app.routes.ts
import { Routes } from '@angular/router';

// Importa tus
import { HomeComponent } from './components/home.component/home.component';
import { Personas } from './components/personas/personas';

export const router: Routes = [
  { path: '', component: HomeComponent },
  { path: 'personas', component: Personas },
];
