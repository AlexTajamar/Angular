import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Jugador } from '../models/Jugador';
import { HttpClient } from '@angular/common/http';
import { Equipo } from '../models/Equipo';

@Injectable()
export class ServiceFutbol {
  constructor(private _http: HttpClient) {}
  getJugadoresEquipo(idEquipo: number): Observable<Array<Jugador>> {
    let request = idEquipo;
    let url = environment.ulrJugadoresIdEquipo + request;
    return this._http.get<Array<Jugador>>(url);
  }

  findEquipo(idEquipo: number): Observable<Equipo> {
    let request = idEquipo;
    let url = environment.urlEquipoId + request;

    return this._http.get<Equipo>(url);
  }
  getEquipos(): Observable<Array<Equipo>> {
    let url = environment.urlEquipos;
    return this._http.get<Array<Equipo>>(url);
  }
}
