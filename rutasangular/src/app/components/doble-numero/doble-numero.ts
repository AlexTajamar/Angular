import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-doble-numero',
  standalone: false,
  templateUrl: './doble-numero.html',
  styleUrl: './doble-numero.css',
})
export class DobleNumero implements OnInit {
  public num!: number;
  public doble: number;

  ngOnInit(): void {
    this._activateRoute.params.subscribe((parametros: Params) => {
      if (parametros['num'] != null) {
        this.num = parseInt(parametros['num']);
        this.doble = this.num * 2;
      }
    });
  }
  constructor(private _activateRoute: ActivatedRoute, private _router: Router) {
    this.doble = 0;
  }

  goToHome(): void {
    this._router.navigate(['/']);
  }

  redirect(numero: number): void {
    this._router.navigate(['/doble', numero]);
  }
}
