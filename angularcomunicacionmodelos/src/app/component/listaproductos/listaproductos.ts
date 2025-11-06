import { Component } from '@angular/core';
import { ProductoModule } from '../../models/producto/producto-module';

@Component({
  selector: 'app-listaproductos',
  standalone: false,
  templateUrl: './listaproductos.html',
  styleUrl: './listaproductos.css',
})
export class Listaproductos {
  public myProduct: ProductoModule;
  public productos: Array<ProductoModule>;

  constructor() {
    this.myProduct = new ProductoModule('Laptop', 'path/to/image.png', 1200);
    this.productos = new Array<ProductoModule>();
    this.productos = [
      new ProductoModule(
        'Nike Air Jordan',
        'https://images.zapantojos.com/media/2022/07/39253d37.jpg',
        150
      ),
      new ProductoModule(
        'Nike Air Mag',
        'https://limitedresell.com/img/anblog/b/b-654d14cfc06f5-anblog_thumb.jpg',
        1900
      ),
      new ProductoModule(
        'New Balance 998',
        'https://www.sneakers-actus.fr/wp-content/uploads/2023/06/NB-998-U998TE-x-Teddy-Santis-Plum-Purple-MIUSA.jpg',
        140
      ),
      new ProductoModule(
        'https://jhayber.com/documents/images/products/63638-850-1.jpg',
        'J-Hayber Olimpo',
        60
      ),
      new ProductoModule(
        'Triple S Balenciaga',
        'https://cdn1.jolicloset.com/imgr/full/2024/05/1321192-1/plastico-zapatillas-balenciaga-triple-s-de-poliuretano-blanco-amarillo.jpg',
        650
      ),
    ];
  }
}
