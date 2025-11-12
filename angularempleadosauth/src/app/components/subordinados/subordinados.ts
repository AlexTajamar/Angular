import { Component, OnInit } from '@angular/core';
import { ServicesEmpleado } from '../../services/servicios.empleados';

@Component({
  selector: 'app-subordinados',
  standalone: false,
  templateUrl: './subordinados.html',
  styleUrl: './subordinados.css',
})
export class Subordinados implements OnInit {
  public subordinados: any;
  constructor(private _services: ServicesEmpleado) {}
  ngOnInit(): void {
    this._services.getSubordinado().subscribe((response) => {
      this.subordinados = response;
    });
  }
}
