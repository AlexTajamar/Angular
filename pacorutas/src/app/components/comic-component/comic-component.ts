import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Comic } from '../../models/comic';

@Component({
  selector: 'app-comic',
  standalone: false,
  templateUrl: './comic-component.html',
  styleUrl: './comic-component.css',
})
export class ComicComponent {
  @Input() comic!: Comic;
  @Input() index!: number;
  @Output() seleccionarFavorito: EventEmitter<any> = new EventEmitter<any>();
  @Output() deleteComic: EventEmitter<any> = new EventEmitter<any>();

  marcarFavorito(): void {
    this.seleccionarFavorito.emit(this.comic);
  }

  eliminarComic() {
    this.deleteComic.emit(this.index);
  }
}
