import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  // en la clase de Input
  //@Input() personajes: Personaje[]=[];

  @Input() nuevo: Personaje={
    nombre:" ",
    poder: 0
  }

  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
  agregar(){
    if (this.nuevo.nombre.trim().length===0) {return; }
    //console.log(this.nuevo);
    this.onNuevoPersonaje.emit(this.nuevo);
    this.nuevo = {
      nombre:"Nombre",
      poder: 0
    }
    
   //--------------------------------------
   /*  if(this.nuevo.nombre.trim().length===0) 
    return;
    console.log('this.nuevo'); */
  }

}
