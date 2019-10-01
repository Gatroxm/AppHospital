import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent {

  @Input() leyenda: string = 'Leyenda';
  @Input() porcentaje: number = 50;
  @Output() event: EventEmitter<number> = new EventEmitter();
  @ViewChild('txtProgres') txtProgres: ElementRef;

  constructor() { }

  cambiarValor( valor ) {
    if ( this.porcentaje <= 0 && valor < 0) {
      this.porcentaje = 0;
    }
    if (this.porcentaje >= 100 && valor > 0) {
      this.porcentaje = 100;
    }
    this.porcentaje += valor;
    this.event.emit(this.porcentaje);
  }

}
