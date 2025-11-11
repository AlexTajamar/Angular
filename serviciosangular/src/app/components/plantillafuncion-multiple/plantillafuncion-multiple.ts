import { Component, OnInit } from '@angular/core';
import { ServicioPlantilla } from '../../services/service.plantilla';
import { Plantilla } from '../../models/Plantilla';

@Component({
  selector: 'app-plantillafuncion-multiple',
  standalone: false,
  templateUrl: './plantillafuncion-multiple.html',
  styleUrl: './plantillafuncion-multiple.css',
})
export class PlantillafuncionMultiple implements OnInit {
  public plantillaCompleta!: Array<Plantilla>;
  public plantillaFiltrada!: Array<Plantilla>;
  public funciones!: Array<string>;
  constructor(private _services: ServicioPlantilla) {
    this.plantillaCompleta = new Array<Plantilla>();
  }

  public funcionSeleccionada: string = 'TODOS';
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
