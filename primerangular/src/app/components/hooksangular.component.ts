import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'hook-angular',
  templateUrl: './hooksangular.component.html',
  styleUrls: ['./hooksangular.component.css'],
  standalone: false,
})
export class HookComponent implements OnInit {
  public mensaje: string;
  constructor() {
    console.log('Constructor : Primer método de inicio de Component');
    this.mensaje = 'Hoy es miercoles';
  }

  cambiarMensaje(): void {
    this.mensaje = 'Mañana es jueves';
  }

  ngOnInit(): void {
    console.log('Dentro de OnInit');
  }
  ngDoCheck(): void {
    console.log('Dentro de update');
  }
}
