import { Component, OnInit } from '@angular/core';
import { ServiceFutbol } from '../../services/service.futbol';
import { Equipo } from '../../models/Equipo';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.css',
  standalone: false,
})
export class Header implements OnInit {
  public equipos!: Array<Equipo>;
  ngOnInit(): void {
    this._servicies.getEquipos().subscribe((response) => {
      console.log(response);
      this.equipos = response;
    });
  }
  constructor(private _servicies: ServiceFutbol) {}
}
