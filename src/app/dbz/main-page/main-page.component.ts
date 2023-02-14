import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

 /* agregamos una interfaz */

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  personajes: Personaje[]=[
    {
      nombre: "Koku",
      poder: 15000
    },
    {
      nombre: "Vegeta",
      poder: 7500
    }
  ];
  nuevo: Personaje={
    nombre: 'Maestro Roshi',
    poder: 1000
  }
}
