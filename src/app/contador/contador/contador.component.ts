
// para exportar el componente
import {Component} from '@angular/core';

@Component({
    selector: 'app-contador',

    templateUrl: './contador.component.html'
  
})
export class ContadorComponent{
 /* titulo = 'Contador App'; */
 // para colocar el tipado de la siguinete forma
      titulo: String = 'Contador App';
      numero: number= 10;
      base: number= 5;

    acumular(valor: number){
        this.numero += valor;
  }

}