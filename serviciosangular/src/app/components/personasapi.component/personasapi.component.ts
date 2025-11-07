import { Component, OnInit } from '@angular/core';
import { ServicioPersonas } from '../../services/service.persona';
import { Persona } from '../../models/Persona';
@Component({
  selector: 'app-personasapi',
  standalone: false,
  templateUrl: './personasapi.component.html',
  styleUrl: './personasapi.component.css',
})
export class PersonasapiComponent implements OnInit {
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
