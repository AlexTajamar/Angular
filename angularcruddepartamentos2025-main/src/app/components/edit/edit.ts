import { ActivatedRoute, Params } from '@angular/router';
import { Component, ElementRef } from '@angular/core';
import { OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import ServiceDepartamentos from '../../services/service.departamentos';
import { Router } from '@angular/router';
import { Departamento } from '../../models/departamento';
import { ThisReceiver } from '@angular/compiler';
@Component({
  selector: 'app-edit',
  standalone: false,
  templateUrl: './edit.html',
  styleUrl: './edit.css',
})
export class Edit implements OnInit {
  public departamento!: Departamento;
  @ViewChild('cajaid') cajaId!: ElementRef;
  @ViewChild('cajanombre') cajaNombre!: ElementRef;
  @ViewChild('cajalocalidad') cajaLocalidad!: ElementRef;

  ngOnInit(): void {
    this._activateRoute.params.subscribe((params: Params) => {
      let id = parseInt(params['id']);
      this._services.findDpartamento(id).subscribe((response) => {
        this.departamento = response;
      });
    });
  }

  updateDepartamento(): void {
    let id = parseInt(this.cajaId.nativeElement.value);
    let nombre = this.cajaNombre.nativeElement.value;
    let localidad = this.cajaLocalidad.nativeElement.value;
    let depart = new Departamento(id, nombre, localidad);
    this._services.updateDepartamento(depart).subscribe((response) => {
      console.log('updated');
      this._router.navigate(['/']);
    });
  }

  constructor(
    private _activateRoute: ActivatedRoute,
    private _services: ServiceDepartamentos,
    private _router: Router
  ) {}
}
