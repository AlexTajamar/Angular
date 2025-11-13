import { Component, OnInit } from '@angular/core';
import ServiceFutbol from '../../services/service.futbol';
import { DatosEquipo } from '../../models/datosequipo';
import { ActivatedRoute, Params } from '@angular/router';
import { Jugador } from '../../models/jugador';

@Component({
  selector: 'app-jugadores-component',
  standalone: false,
  templateUrl: './jugadores-component.html',
  styleUrl: './jugadores-component.css',
})
export class JugadoresComponent implements OnInit {
  public jugadores!: Array<Jugador>;
  public rating: Array<number>;
  constructor(
    private _service: ServiceFutbol,
    private _activeRoute: ActivatedRoute
  ){
    this.rating = new Array<number>();
  }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      console.log("Que pasa aqui???");
      let search = params["search"];
      let aux = [];
      this._service.getJugadoresNombre(search).subscribe(response => {
        for (var i = 0; i < response.length; i++){
          let random = Math.floor((Math.random() * 100) + 1);
          console.log(random);
          aux.push(random);
        }
        this.rating = aux;
        console.log(this.rating[1]);
        this.jugadores = response;
      })
    })
  }

  getPosicionClass(posicion: string): string {
    const clases: { [key: string]: string } = {
      'Portero': 'position-portero',
      'Defensa': 'position-defensa',
      'Defensa central': 'position-defensa',
      'Lateral derecho': 'position-defensa',
      'Lateral izquierdo': 'position-defensa',
      'Mediocentro': 'position-centrocampista',
      'Mediapunta': 'position-centrocampista',
      'Delantero': 'position-delantero'
    };
    return clases[posicion] || '';
  }    
}
