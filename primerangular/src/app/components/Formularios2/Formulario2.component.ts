import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'formulario2-angular',
  templateUrl: './Formulario2.component.html',
  styleUrls: ['./Formulario2.component.css'],
  standalone: false,
})
export class Formulario2Component implements OnInit {
  @ViewChild('cajanumero1') cajanumero1Ref: ElementRef;
  @ViewChild('cajanumero2') cajanumero2Ref: ElementRef;

  public suma: number;
  constructor() {
    this.suma = 0;
    this.cajanumero1Ref = new ElementRef(0);
    this.cajanumero2Ref = new ElementRef(0);
  }

  mostrarSuma(): void {
    let num1 = this.cajanumero1Ref.nativeElement.value;
    let num2 = this.cajanumero2Ref.nativeElement.value;
    this.suma = parseInt(num1) + parseInt(num2);
  }
  ngOnInit(): void {
    console.log('Dentro de OnInit');
  }
  ngDoCheck(): void {
    console.log('Dentro de update');
  }
}
