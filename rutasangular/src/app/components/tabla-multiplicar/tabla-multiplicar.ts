import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-tabla-multiplicar',
  standalone: false,
  templateUrl: './tabla-multiplicar.html',
  styleUrl: './tabla-multiplicar.css',
})
export class TablaMultiplicar {
  public num: number;
  public numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  ngOnInit(): void {
    this._activateRoute.params.subscribe((parametros: Params) => {
      if (parametros['num'] != null) {
        this.num = parseInt(parametros['num']);
      }
    });
  }
  constructor(private _activateRoute: ActivatedRoute, private _router: Router) {
    this.num = 0;
  }
}
