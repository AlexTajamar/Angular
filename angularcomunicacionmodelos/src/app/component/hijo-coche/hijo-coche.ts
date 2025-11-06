import { Component, Input, OnInit } from '@angular/core';
import { CocheModule } from '../../models/coche/coche-module';

@Component({
  selector: 'app-hijo-coche',
  standalone: false,
  templateUrl: './hijo-coche.html',
  styleUrl: './hijo-coche.css',
})
export class HijoCoche implements OnInit {
  public mensaje: string;
  @Input() car!: CocheModule;
  constructor() {
    this.mensaje = '';
  }
  ngOnInit(): void {
    if (this.car) {
      this.carState();
    }
  }

  carState(): boolean {
    if (this.car.estado == false) {
      this.car.velocidad = 0;
      this.mensaje = 'Esta apagado';
      return false;
    } else {
      this.mensaje = 'aranncando';
      return true;
    }
  }

  encendercar(): void {
    this.car.estado = !this.car.estado;
    this.carState();
  }

  acelerarcar(): void {
    if (this.carState() == false) {
      alert('Donde vas que estoy apagado');
    } else {
      this.carState();
      this.car.velocidad += this.car.aceleracion;
    }
  }
}
