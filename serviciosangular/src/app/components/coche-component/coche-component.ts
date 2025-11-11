import { Component, OnInit } from '@angular/core';
import { ServicioCoches } from '../../services/services.coches';
import { Coche } from '../../models/Coche';
@Component({
  selector: 'app-coche-component',
  standalone: false,
  templateUrl: './coche-component.html',
  styleUrl: './coche-component.css',
})
export class CocheComponent implements OnInit {
  public coches!: Array<Coche>;
  constructor(private _services: ServicioCoches) {}
  ngOnInit(): void {
    this._services
      .getCochesPromise()
      .then((response) => response.json())
      .then((data) => {
        this.coches = data;
        console.log(data);
      });
  }
}
