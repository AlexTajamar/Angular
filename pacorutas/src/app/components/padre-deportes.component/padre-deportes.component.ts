import { Component } from '@angular/core';

@Component({
  selector: 'app-padre-deportes.component',
  standalone: false,
  templateUrl: './padre-deportes.component.html',
  styleUrl: './padre-deportes.component.css',
})
export class PadreDeportesComponent {
  public deportes: Array<string>;
  public mensaje: string;

  //NECESITAMOS UN METODO QUE RECIBIRA EVENT QUE VA A SER CUALQUIER TIPADO (any)
  seleccionarFavoritoPadre(event: string): void {
    this.mensaje = "Deporte favorito: " + event;
    console.log("Comunicando al padre!!! " + event);
  }

  constructor() {
    this.mensaje = "";
    this.deportes = ["Futbol", "Basket", "Beisbol", "Natación", "Dados"]
  }
}
