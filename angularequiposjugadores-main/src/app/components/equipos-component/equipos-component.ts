import { Component, OnInit } from '@angular/core';
import ServiceFutbol from '../../services/service.futbol';
import { DatosEquipo } from '../../models/datosequipo';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-equipos-component',
  standalone: false,
  templateUrl: './equipos-component.html',
  styleUrl: './equipos-component.css',
})
export class EquiposComponent implements OnInit {
  public datosequipo!: DatosEquipo;
  constructor(
    private _service: ServiceFutbol,
    private _activeRoute: ActivatedRoute
  ){}

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      let idEquipo = parseInt(params['idequipo']);
      this._service.getDatosEquipo(idEquipo).subscribe(data => {
        data.equipo.descripcion = data.equipo.descripcion.substring(0, 250);
        this.datosequipo = data;
      });
    })
  }

  getPosicionClass(posicion: string): string {
    const clases: { [key: string]: string } = {
      'Portero': 'position-portero',
      'Defensa': 'position-defensa',
      'Defensa central': 'position-defensa',
      'Lateral derecho': 'position-defensa',
      'Lateral izquierdo': 'position-defensa',
      'Mediocentro': 'position-centrocampista',
      'Mediapunta': 'position-centrocampista',
      'Delantero': 'position-delantero'
    };
    return clases[posicion] || '';
  }  
}
