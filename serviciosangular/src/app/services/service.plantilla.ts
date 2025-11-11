import { Injectable } from '@angular/core';
import { Persona } from '../models/Persona';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Plantilla } from '../models/Plantilla';

@Injectable()
export class ServicioPlantilla {
  //Un Observable<Any></Any> para devikver la peticion
  getPlantilla(): Observable<any> {
    let url = environment.urlPlantilla;
    let request = 'Personas';
    return this._httpClient.get('https://apiplantillacore.azurewebsites.net/api/Plantilla');
  }

  getPlantillaFunciones(): Observable<Array<string>> {
    let url = environment.urlPlantilla;
    let request = 'Personas';
    return this._httpClient.get<Array<string>>(
      'https://apiplantillacore.azurewebsites.net/api/Plantilla/Funciones'
    );
  }

  getPlantillaFuncionesMultiple(funciones: Array<string>): Observable<Array<Plantilla>> {
    let datos = '';
    for (var funcion of funciones) {
      datos += 'funtion=' + funcion + '&';
    }
    datos.substring(0, datos.length - 1);
    let request = 'plantilla/plantillafunciones?' + datos;
    let url = environment.urlPlantilla + request;
    return this._httpClient.get<Array<Plantilla>>(url);
  }

  constructor(private _httpClient: HttpClient) {}
}
