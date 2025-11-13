import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of, forkJoin, Observer } from "rxjs";
import { Equipo } from "../models/equipo";
import { Jugador } from "../models/jugador";
import { environment } from "../../environments/environment.development";
import { delay } from 'rxjs/operators';
import { DatosEquipo } from "../models/datosequipo";

@Injectable()
export default class ServiceFutbol {
    public delayTime: boolean;
    constructor(private _http: HttpClient){
        this.delayTime = false;
    }

    getDelayTime(): Observable<boolean>{
        const data = of(this.delayTime);
        return data;
    }

    changeDelayTime(): Observable<boolean>{
        this.delayTime = !this.delayTime;
        const data = of(this.delayTime);
        return data;
    }

    findEquipo(idEquipo: number): Observable<Equipo> {
        let request = "api/equipos/" + idEquipo;
        let url = environment.urlApiEjemplos + request;
        return this._http.get<Equipo>(url);
    }

    getJugadoresEquipo(idEquipo: number): Observable<Array<Jugador>> {
        let request = "api/jugadores/jugadoresequipos/" + idEquipo;
        let url = environment.urlApiEjemplos + request;
        if (this.delayTime == false){
            //TODO OK
            return this._http.get<Array<Jugador>>(url);
        }else{
          return this._http.get<Array<Jugador>>(url).pipe(delay(5000));  
        }
    }

    getJugadoresNombre(nombre: string): Observable<Array<Jugador>> {
        let request = "api/jugadores/findjugadores/" + nombre;
        let url = environment.urlApiEjemplos + request;
        return this._http.get<Array<Jugador>>(url);
    }  

    getEquipos(): Observable<Array<Equipo>> {
        let request = "api/equipos";
        let url = environment.urlApiEjemplos + request;
        return this._http.get<Array<Equipo>>(url);
    }

    getDatosEquipo(idEquipo: number): Observable<DatosEquipo> {
        const allOperations =  forkJoin(
        {
            requestEquipo: this.findEquipo(idEquipo),
            requestJugadores: this.getJugadoresEquipo(idEquipo)
        })
        const observable:Observable<DatosEquipo> = new Observable((observer:Observer<DatosEquipo>) => {
            allOperations.subscribe(({requestEquipo, requestJugadores}) => {
                const data = new DatosEquipo();
                data.equipo = requestEquipo;
                data.jugadores = requestJugadores;
                observer.next(data);
                observer.complete();
            });
        });
        return observable;
    }

    //AHORA SI VAMOS A PROBAR ESTO NUEVO...JEJEJE
    //TENEMOS UN METODO QUE LUEGO VOY A CONVERTIR EN EQUIPOS...
    getClientData() : Observable<any> {
        return of({ client: 'Client 1' });
    }

    //TENEMOS OTRO METODO QUE LUEGO VOY A CONVERTIR EN JUGADORES
    getOtherData(): Observable<any> {
        // Fake server latency
        return of({ other: 'Other data that takes a while to return from server...' })
            .pipe(delay(2000));
    }

    getData(): Observable<ServerResponse> {
        const allOperations =  forkJoin(
        {
            requestOne: this.getClientData(),
            requestTwo: this.getOtherData()
        })
        // const allOperations = forkJoin(
        //     this.getClientData(),
        //     this.getOtherData()
        // );



        const observable:Observable<ServerResponse> = new Observable((observer:Observer<ServerResponse>) => {
            allOperations.subscribe(({requestOne, requestTwo}) => {
                const data = new ServerResponse();
                data.client = requestOne;
                data.otherdata = requestTwo;
                observer.next(data);
                observer.complete();
            });
        });
        // We return the observable, with the code above to be executed only once it is subscribed to
        return observable;
    }    
}

export class ServerResponse {
    public client: string;
    public otherdata: string;
    constructor(){
        this.client = "";
        this.otherdata = "";
    }
}