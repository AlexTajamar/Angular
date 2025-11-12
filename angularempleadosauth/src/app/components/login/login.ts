// components/login.ts

import { Usuario } from './../../models/Usuario';
import { Component, ElementRef, OnInit } from '@angular/core';
import { ServicesEmpleado } from '../../services/servicios.empleados';
import { ViewChild } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
  public user!: Usuario;
  @ViewChild('cajausuario') usr!: ElementRef;
  @ViewChild('cajacontraseña') psw!: ElementRef;

  constructor(private _service: ServicesEmpleado, private _router: Router) {}

  ngOnInit(): void {}

  getToken(): void {
    let userToken = new Usuario(this.usr.nativeElement.value, this.psw.nativeElement.value);
    this._service.getToken(userToken).subscribe((response) => {
      console.log('Respuesta de la API:', response);
      localStorage.setItem('token', response.response);
      this._router.navigate(['/perfil']);
    });
  }
}
