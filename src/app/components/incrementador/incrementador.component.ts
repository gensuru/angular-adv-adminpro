import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit{

  
  ngOnInit(): void {
    this.btnClass = `btn ${ this.btnClass }`;
  }

  @Input('valorInput') progreso: number = 50;
  @Input() btnClass: string = 'btn-primary';

  @Output() valorOutput: EventEmitter<number> = new EventEmitter();

  /*get getProgreso(){
    return `${ this.progreso }%`;
  }*/

  cambiarValor(valor: number){

    if (this.progreso > 100 && valor >0) {
      this.valorOutput.emit(100);
      return this.progreso = 100;
    } 
    
    if(this.progreso < 0 && valor < 0){
      this.valorOutput.emit(0);
      return this.progreso = 0;
    }

    this.progreso += valor;
    this.valorOutput.emit(this.progreso);
  }

  onChange(nuevoValor: number){

    if (nuevoValor >= 100) {
      this.progreso = 100;
    }else if(nuevoValor <= 100){
      this.progreso = 0;
    }else{
      this.progreso = nuevoValor;
    }
    
    this.valorOutput.emit(this.progreso);
    
  }
 
}
