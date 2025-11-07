import { Component, OnInit } from '@angular/core';
import { ServicioPersonas } from '../../services/service.personas';
import { Persona } from '../../models/Persona';
@Component({
  selector: 'app-personas',
  imports: [],
  templateUrl: './personas.html',
  styleUrl: './personas.css',
  providers:[]
})
export class Personas implements OnInit {
  public personas!: Array<Persona>;

  constructor(private _services: ServicioPersonas) {
    this._services.getPersonas().subscribe((response) => {
      console.log('Leyendo');
      this.personas = response;
    });
  }
  ngOnInit(): void {
    this._services.getPersonasPromise().then((response) => {
      console.log('Reading');
      this.personas = response;
    });
  }
}
