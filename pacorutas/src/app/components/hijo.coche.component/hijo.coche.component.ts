import { Component, Input } from '@angular/core';
import { Coche } from '../../models/coche';

@Component({
  selector: 'app-hijo-coche',
  standalone: false,
  templateUrl: './hijo.coche.component.html',
  styleUrl: './hijo.coche.component.css',
})
export class HijoCocheComponent {
  @Input() car!: Coche;
  public mensaje: string;

  constructor() {
    this.mensaje = "";
  }

  comprobarEstado(): boolean {
    if (this.car.estado == false){
      this.mensaje = "El coche está apagado!!!";
      this.car.velocidad = 0;
      return false; 
    }else{
      this.mensaje = "Arrancando!!!";
      return true;
    }
  }

  encenderCoche(): void {
    this.car.estado = !this.car.estado;
    this.comprobarEstado();
  }

  acelerarCoche(): void {
    if (this.comprobarEstado() == false){
      alert("¿donde vas? Que estoy apagado!!!!")
    }else{
      this.car.velocidad += this.car.aceleracion;
    }
  }
}
