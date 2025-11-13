import { Component, OnInit } from '@angular/core';
import ServiceFutbol from '../../services/service.futbol';
import { DatosEquipo } from '../../models/datosequipo';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-datos-equipo-component',
  standalone: false,
  templateUrl: './datos-equipo-component.html',
  styleUrl: './datos-equipo-component.css',
})
export class DatosEquipoComponent  implements OnInit {
  public dataequipo!: DatosEquipo;
  constructor(
    private _service: ServiceFutbol,
    private _activeRoute: ActivatedRoute
  ){}

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      let idEquipo = parseInt(params['idequipo']);
      let datos: DatosEquipo;
      datos = new DatosEquipo();
      this._service.findEquipo(idEquipo).subscribe(response => {
        response.descripcion = response.descripcion.substring(0, 250);
        datos.equipo = response;
      })
      this._service.getJugadoresEquipo(idEquipo).subscribe(response => {
        datos.jugadores = response;
      })
      this.dataequipo = datos;
    })
  }
}
