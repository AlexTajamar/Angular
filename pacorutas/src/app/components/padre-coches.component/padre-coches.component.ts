import { Component } from '@angular/core';
import { Coche } from '../../models/coche';

@Component({
  selector: 'app-padre-coches',
  standalone: false,
  templateUrl: './padre-coches.component.html',
  styleUrl: './padre-coches.component.css',
})
export class PadreCochesComponent {
  public cochesArray: Array<Coche>;
  constructor() {
    this.cochesArray = [
      new Coche("Ford", "Mustang", 400, 30, false),
      new Coche("Volkswagen", "Escarabajo", 110, 4, false),
      new Coche("Lamborghini", "Diablo", 800, 72, false)
    ]
  }
}
