import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/Usuario';
import { environment } from '../../environments/environment.development';

@Injectable()
export class ServicesEmpleado {
  constructor(private _http: HttpClient) {}

  getToken(usuario: Usuario): Observable<any> {
    let json = JSON.stringify(usuario);
    let header = new HttpHeaders();
    header = header.set('Content-type', 'application/json');
    let request = 'Auth/Login';
    let url = environment.urlAuth + request;
    return this._http.post(url, json, { headers: header });
  }
  getPerfilEmpleado(): Observable<any> {
    const token = localStorage.getItem('token');

    let header = new HttpHeaders();
    header = header.set('Authorization', 'Bearer ' + token);

    let request = 'api/Empleados/PerfilEmpleado';
    let url = environment.urlAuth + request;

    return this._http.get(url, { headers: header });
  }

  getSubordinado(): Observable<any> {
    const token = localStorage.getItem('token');

    let header = new HttpHeaders();
    header = header.set('Authorization', 'Bearer ' + token);
    let request = 'api/Empleados/Subordinados';
    let url = environment.urlAuth + request;

    return this._http.get(url, { headers: header });
  }
}
