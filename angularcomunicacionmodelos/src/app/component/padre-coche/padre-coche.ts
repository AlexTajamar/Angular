import { Component } from '@angular/core';
import { CocheModule } from '../../models/coche/coche-module';

@Component({
  selector: 'app-padre-coche',
  standalone: false,
  templateUrl: './padre-coche.html',
  styleUrl: './padre-coche.css',
})
export class PadreCoche {
  listaDeCoches: CocheModule[] = [
    new CocheModule('Toyota', 'Corolla', 0, 5, false),
    new CocheModule('Ford', 'Mustang', 120, 10, true),
    new CocheModule('Tesla', 'Model S', 80, 15, true),
    new CocheModule('Honda', 'Civic', 0, 6, false),
    new CocheModule('Volkswagen', 'Golf', 50, 7, true),
    new CocheModule('Nissan', 'Leaf', 0, 8, false),
  ];
}
