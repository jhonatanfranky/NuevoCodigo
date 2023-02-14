import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

 /* agregamos una interfaz */

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1500
  }
  constructor(){}
  //para corregir y que funcione los servicios
  //get personajes():Personaje[] {
  // return this.dbzService.personajes;
  // }
  /* agregarNuevoPersonaje( argumento:Personaje ){
    //debugger;
    //this.personajes.push(argumento);
  } */
  //se conoce como una inyección
 
  //constructor(private dbzService:DbzService){}
}


