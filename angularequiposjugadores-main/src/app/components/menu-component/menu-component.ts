import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import ServiceFutbol from '../../services/service.futbol';
import { Equipo } from '../../models/equipo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu-component.html',
  styleUrl: './menu-component.css',
})
export class MenuComponent implements OnInit {
  public equipos!: Array<Equipo>;
  public delay: boolean;
  @ViewChild("cajanombre") cajaNombre!: ElementRef;
  constructor(
    private _service: ServiceFutbol,
    private _router: Router
  ){
    this.delay = false;
  }

  ngOnInit(): void {
      this._service.getEquipos().subscribe(response => {
        this.equipos = response;
      })
  }

  setDelayServices(): void {
    this._service.changeDelayTime().subscribe(response =>{
      this.delay = response;
    });
  }

  buscarJugadores(): void {
    let search = this.cajaNombre.nativeElement.value;
    console.log("Antes de navegar..." + search);
    this._router.navigate(['/jugadores', search]);
  }
}
