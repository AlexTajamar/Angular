import { Component } from '@angular/core';

@Component({
  selector: 'primer-componente',
  templateUrl: './primer.component.html',
  standalone: false,
  styleUrls: ['./primer.xomponent.css'],
})
export class PrimerComponent {
  public titulo: string;
  public descripcion: string;
  public year: number;

  constructor() {
    this.titulo = 'Primer angular';
    this.descripcion = 'Primera descripcion';
    this.year = 2011;
  }
}
