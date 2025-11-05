import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'deportes-angular',
  templateUrl: './Deportes.component.html',
  styleUrls: ['./Deportes.component.css'],
  standalone: false,
})
export class DeportesComponent implements OnInit {
  public sports: Array<string>;
  public numeros: number[];

  constructor() {
    this.sports = ['Futbol', 'Baloncesto', 'Tenis'];
    this.numeros = [1, 2, 3, 4, 5];
  }

  ngOnInit(): void {
    console.log('Dentro de OnInit');
  }
  ngDoCheck(): void {
    console.log('Dentro de update');
  }
}
