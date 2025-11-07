import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

// 1. IMPORTA EL PROVEEDOR DE HTTP
import { provideHttpClient } from '@angular/common/http';

import { router } from './app.routes'; // (Ojo con esto, mira la nota abajo)
import { ServicioPersonas } from './services/service.personas';
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(router),
    ServicioPersonas,
    provideHttpClient(),
  ],
};
