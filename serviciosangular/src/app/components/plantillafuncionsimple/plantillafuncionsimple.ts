import { Component, OnInit } from '@angular/core';
import { ServicioPlantilla } from '../../services/service.plantilla';
import { Plantilla } from '../../models/Plantilla';

@Component({
  selector: 'app-plantillafuncionsimple',
  standalone: false,
  templateUrl: './plantillafuncionsimple.html',
  styleUrl: './plantillafuncionsimple.css',
})
export class Plantillafuncionsimple implements OnInit {
  // --- Variables de datos ---
  public plantillaCompleta!: Array<Plantilla>;
  public plantillaFiltrada!: Array<Plantilla>;
  public funciones!: Array<string>;

  public funcionSeleccionada: string = 'TODOS';

  constructor(private _services: ServicioPlantilla) {}

  ngOnInit(): void {
    this._services.getPlantillaFunciones().subscribe((response) => {
      this.funciones = response;
    });

    this._services.getPlantilla().subscribe((response) => {
      this.plantillaCompleta = response;
      this.plantillaFiltrada = this.plantillaCompleta;
    });
  }

  filtrarPlantilla(): void {
    if (this.funcionSeleccionada === 'TODOS') {
      this.plantillaFiltrada = this.plantillaCompleta;
    } else {
      this.plantillaFiltrada = this.plantillaCompleta.filter(
        (item) => item.funcion === this.funcionSeleccionada
      );
    }
  }
}
