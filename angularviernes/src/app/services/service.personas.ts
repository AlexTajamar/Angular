import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Persona } from '../models/Persona';
import axios, { Axios } from 'axios';

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

  getPersonasPromiseAxios(): Promise<any> {
    let url = environment.url;
    let request = 'api/personas';
    return new Promise((resolve) => {
      axios.get(url + request).then((response) => {
        resolve(response);
      });
    });
  }
  getPersonasPromiseFetch(): Promise<any> {
    let url = environment.url;
    let request = 'api/personas';

    return fetch(url + request).then((response) =>
         {return response.json()}).then((data) => 
            {return data;
                
            });

  }
  constructor(private _httpClient: HttpClient) {}
}
