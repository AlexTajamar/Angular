import { Component, OnInit } from '@angular/core';
import { ServicesEmpleado } from '../../services/servicios.empleados';
import { Empleados } from '../../models/Empleados';

@Component({
  selector: 'app-perfil-empleados',
  standalone: false,
  templateUrl: './perfil-empleados.html',
  styleUrl: './perfil-empleados.css',
})
export class PerfilEmpleados implements OnInit {
  public empleado: any;
  ngOnInit(): void {
    this._service.getPerfilEmpleado().subscribe((response) => {
      this.empleado = response;
      console.log(response);
    });
  }
  constructor(private _service: ServicesEmpleado) {}
}
