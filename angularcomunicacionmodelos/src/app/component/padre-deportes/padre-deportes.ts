import { Component } from '@angular/core';

@Component({
  selector: 'app-padre-deportes',
  standalone: false,
  templateUrl: './padre-deportes.html',
  styleUrl: './padre-deportes.css',
})
export class PadreDeportes {
  public deportes: Array<string>;
  public mensaje: string;
  constructor() {
    this.deportes = ['Futbol', 'Baloncesto', 'Badmington'];
    this.mensaje = '';
  }

  seleccionarFavorito(event: any): any {
    console.log('Comunicando al padre' + event);
  }
}
