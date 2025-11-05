import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'formulario-angular',
  templateUrl: './Formulario.component.html',
  styleUrls: ['./Formulario.component.css'],
  standalone: false,
})
export class FormularioComponent implements OnInit {
  public user: any;
  public mensaje: string;
  constructor() {
    this.mensaje = '';
    this.user = {
      nombre: '',
      apellidos: '',
      edad: 0,
    };
  }

  recibirDatos(): void {
    this.mensaje = 'Datos recibidos';
  }

  ngOnInit(): void {
    console.log('Dentro de OnInit');
  }
  ngDoCheck(): void {
    console.log('Dentro de update');
  }
}
