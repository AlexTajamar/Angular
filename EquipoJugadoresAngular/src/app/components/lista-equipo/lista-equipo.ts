import { Component, Input, OnInit } from '@angular/core';
import { ServiceFutbol } from '../../services/service.futbol';
import { Equipo } from '../../models/Equipo';

@Component({
  selector: 'app-lista-equipo',
  templateUrl: './lista-equipo.html',
  styleUrl: './lista-equipo.css',
  standalone: false,
})
export class ListaEquipo implements OnInit {
  public equipo!: Equipo;
  @Input() idEquipo: string;
  ngOnInit(): void {
    let id = parseInt(this.idEquipo);
    console.log(id);

    if (id != null) {
      this._service.findEquipo(id).subscribe((response) => {
        this.equipo = response;
      });
    }
  }
  constructor(private _service: ServiceFutbol) {
    this.idEquipo = '';
  }
}
