import { Departamentos } from './../../models/Departamento';
import { Component } from '@angular/core';
import { OnInit, ElementRef, ViewChild } from '@angular/core';
import { ServiciosDepartamentos } from '../../services/services.departamentos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: false,
  templateUrl: './create-deaprtamentos.html',
  styleUrl: './create-deaprtamentos.css',
})
export class CreateDepartamentos {
  @ViewChild('cajaid') cajaId!: ElementRef;
  @ViewChild('cajanombre') cajaNombre!: ElementRef;
  @ViewChild('cajalocalidad') cajaLocalidad!: ElementRef;
  
  constructor(private _service: ServiciosDepartamentos, private _router: Router) {}
  
  insertDepartamento(): void {
    let id = parseInt(this.cajaId.nativeElement.value);
    let nombre = this.cajaNombre.nativeElement.value;
    let Localidad = this.cajaLocalidad.nativeElement.value;
    let dept = new Departamentos(id, nombre, Localidad);
    this._service.postDepartamentos(dept).subscribe((response) => {
      console.log('Insertado');
      this._router.navigate(['/']);
    });
  }
}
