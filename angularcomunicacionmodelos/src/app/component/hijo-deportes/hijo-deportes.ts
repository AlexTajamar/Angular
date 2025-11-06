import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo-deportes',
  standalone: false,
  templateUrl: './hijo-deportes.html',
  styleUrl: './hijo-deportes.css',
})
export class HijoDeportes {
  @Input() sport!: string;
  @Output() seleccionarFavorito: EventEmitter<any> = new EventEmitter();
  lanzarEventoFavorito(): void {
    console.log('Botón pulsado en el hijo. Emitiendo...');
    // Aquí emites el valor que quieras enviar al padre
    // Por ejemplo, un objeto o un string
    this.seleccionarFavorito.emit('Nombre del Deporte');
  }
}
