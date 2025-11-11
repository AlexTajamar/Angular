import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Coche } from '../models/Coche';
import { environment } from '../../environments/environment.development';

@Injectable()
export class ServicioCoches {
  //Un Observable<Any></Any> para devikver la peticion
  constructor(private _httpClient: HttpClient) {}

  getCoches(): any {
    let request = 'webresources/coches';
    let url = environment.urlCoches + request;
    fetch(url).then((response) => {
      return response;
    });
  }

  getCochesPromise(): Promise<any> {
    let request = 'webresources/coches';
    let url = environment.urlCoches + request;
    let promise = new Promise((resolve) => {
      fetch(url).then((response) => {
        resolve(response);
      });
    });
    return promise;
  }
}
