import { Component, OnInit } from '@angular/core';
import { ServiciosDepartamentos } from '../../services/services.departamentos';
import { Departamentos } from '../../models/Departamento';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home-departamentos.html',
  styleUrl: './home-departamentos.css',
})
export class HomeDepartamentos implements OnInit {
  public departamentos!: Array<Departamentos>;
  constructor(private _services: ServiciosDepartamentos) {}
  ngOnInit(): void {
    this._services.getDepartamentos().subscribe((response) => {
      this.departamentos = response;
    });
  }
}
