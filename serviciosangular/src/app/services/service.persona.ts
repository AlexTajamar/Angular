import { Injectable } from '@angular/core';
import { Persona } from '../models/Persona';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable()
export class ServicioPersonas {
  //Un Observable<Any></Any> para devikver la peticion
  getPersonas(): Observable<any> {
    let url = environment.url;
    let request = 'api/personas';
    return this._httpClient.get(url + request);
  }
  getPersonasPromise(): Promise<any> {
    let url = environment.url;
    let request = 'api/personas';
    let promise = new Promise((resolve) => {
      this._httpClient.get(url + request).subscribe((response) => {
        resolve(response);
      });
    });
    return promise;
  }
  constructor(private _httpClient: HttpClient) {}
}
