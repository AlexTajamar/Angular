import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Departamento } from '../models/departamento';
import { environment } from '../../environments/environment.development';

@Injectable()
export default class ServiceDepartamentos {
  constructor(private _http: HttpClient) {}

  findDpartamento(idDepart: number): Observable<Departamento> {
    let request = 'api/departamentos/' + idDepart;
    let url = environment.urlApiDepartamentos + request;

    return this._http.get<Departamento>(url);
  }

  updateDepartamento(depart: Departamento): Observable<any> {
    let json = JSON.stringify(depart);
    let header = new HttpHeaders().set('Content-type', 'application/json');
    let request = 'api/departamentos/';
    let url = environment.urlApiDepartamentos + request;
    return this._http.put(url, json, { headers: header });
  }

  createDepartamento(departamento: Departamento): Observable<any> {
    //IGUAL QUE EN REACT O JQUERY
    let json = JSON.stringify(departamento);
    //CREAMOS LA CABECERA DE LA PETICION
    let header = new HttpHeaders();
    //INDICAMOS EL TIPO DE OBJETO A ENVIAR EN DATA
    header = header.set('Content-type', 'application/json');
    let request = 'api/departamentos';
    let url = environment.urlApiDepartamentos + request;
    return this._http.post(url, json, { headers: header });
  }

  getDepartamentos(): Observable<Array<Departamento>> {
    let request = 'api/departamentos';
    let url = environment.urlApiDepartamentos + request;
    return this._http.get<Array<Departamento>>(url);
  }

  deleteDepartamentos(departamento: number): Observable<any> {
    let request = 'api/departamentos/' + departamento;
    let url = environment.urlApiDepartamentos + request;
    return this._http.delete(url);
  }
}
