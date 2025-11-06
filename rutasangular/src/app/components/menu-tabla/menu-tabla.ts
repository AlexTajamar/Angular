import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-tabla',
  standalone: false,
  templateUrl: './menu-tabla.html',
  styleUrl: './menu-tabla.css',
})
export class MenuTabla implements OnInit {
  public aleatorios: Array<number>;
  ngOnInit(): void {
    for (let i = 0; i < 5; i++) {
      // Genera un número entero entre min y max (incluidos)
      const numero = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
      this.aleatorios.push(numero);
    }
  }
  constructor() {
    this.aleatorios = [];
  }
}
