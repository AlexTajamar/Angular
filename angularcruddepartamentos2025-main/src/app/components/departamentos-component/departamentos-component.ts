import { Component, OnInit } from '@angular/core';
import ServiceDepartamentos from '../../services/service.departamentos';
import { Departamento } from '../../models/departamento';

@Component({
  selector: 'app-departamentos',
  standalone: false,
  templateUrl: './departamentos-component.html',
  styleUrl: './departamentos-component.css',
})
export class DepartamentosComponent implements OnInit {
  public departamentos!: Array<Departamento>;
  constructor(private _service: ServiceDepartamentos) {}

  ngOnInit(): void {
    this.loadDepart();
  }
  deleteDepartamentos(dept: number): void {
    this._service.deleteDepartamentos(dept).subscribe((response) => {
      console.log('Deleteado');
      this.loadDepart();
    });
  }
  loadDepart(): void {
    this._service.getDepartamentos().subscribe((response) => {
      this.departamentos = response;
    });
  }
}
