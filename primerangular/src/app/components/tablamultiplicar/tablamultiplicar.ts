import { Component } from '@angular/core';

@Component({
  selector: 'app-tablamultiplicar',
  standalone: false,
  templateUrl: './tablamultiplicar.html',
  styleUrl: './tablamultiplicar.css',
})
export class Tablamultiplicar {
  public numero: number;
  public state: boolean;

  constructor() {
    this.numero = 0;
    this.state = false;
  }

  generarTabla() {
    this.state = true;
  }
}
