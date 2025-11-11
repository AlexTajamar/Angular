import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Departamentos } from '../models/Departamento';

@Injectable()
export class ServiciosDepartamentos {
  constructor(private _http: HttpClient) {}

  getDepartamentos(): Observable<Array<Departamentos>> {
    let request = 'api/departamentos';
    let url = environment.urlDept;
    return this._http.get<Array<Departamentos>>(url + request);
  }

  postDepartamentos(departamento: Departamentos): Observable<any> {
    let json = JSON.stringify(departamento);
    //Creamos la cabecera
    let header = new HttpHeaders();
    //Indicamos el tipo de objeto a enviar en data
    header = header.set('Content-type', 'application/json');
    let request = 'api/departamentos';
    let url = environment.urlDept;
    return this._http.post(
      'https://apicruddepartamentoscore.azurewebsites.net/api/Departamentos',
      json,
      { headers: header }
    );
  }
}
