import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'deportesV2-angular',
  templateUrl: './DeportesV2.component.html',
  styleUrls: ['./DeportesV2.component.css'],
  standalone: false,
})
export class DeportesComponentV2 implements OnInit {
  public numeros: number[];
  public deportes: Array<string>;

  constructor() {
    this.numeros = [1, 2, 3, 4, 5];
    this.deportes = ['Futbol', 'Baloncesto', 'Tenis'];
  }

  ngOnInit(): void {
    console.log('Dentro de OnInit');
  }
  ngDoCheck(): void {
    console.log('Dentro de update');
  }
}
