import { Component, NgModule } from '@angular/core';
import { Persona } from '../../models/Persona';
import { CommonModule } from '@angular/common';
import { ServicioPersonas } from '../../services/service.persona';

@Component({
  selector: 'app-personas-standalone-true',
  standalone: true,
  templateUrl: './personas-standalone-true.html',
  styleUrl: './personas-standalone-true.css',
  imports: [CommonModule],
  providers: [ServicioPersonas],
})
export class PersonasStandaloneTrue {
  public personas!: Array<Persona>;
  constructor() {
    let p = new Persona(1, 'Angel', 'Terrorista Afgano', 69);
    this.personas.push(p);
    let p1 = new Persona(1, 'Angel', 'Terrorista de Lira', 69);
    this.personas.push(p1);
  }
}
