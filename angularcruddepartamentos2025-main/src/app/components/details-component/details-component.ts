import { ActivatedRoute, Params } from '@angular/router';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Departamento } from '../../models/departamento';
//https://stackoverflow.com/questions/54190757/how-would-you-return-an-observablet-from-a-function
@Component({
  selector: 'app-details-component',
  standalone: false,
  templateUrl: './details-component.html',
  styleUrl: './details-component.css',
})
export class DetailsComponent implements OnInit {
  public departamento!: Departamento;
  ngOnInit(): void {
    this._activateRoute.params.subscribe((params: Params) => {
      let id = parseInt(params['id']);
      let nombre = params['nombre'];
      let localidad = params['localidad'];
      this.departamento = new Departamento(id, nombre, localidad);
    });
  }
  constructor(private _activateRoute: ActivatedRoute) {}
}
