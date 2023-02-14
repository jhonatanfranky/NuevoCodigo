import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";


@Injectable()
export class DbzService{
    //para agregar una propiedad privada
    private _personajes: Personaje[]=[
        {
          nombre: "Koku",
          poder: 15000
        },
        {
          nombre: "Vegeta",
          poder: 7500
        }
      ];

      get personajes(): Personaje[]{
        //para decirle que es un arreglo
        return [...this._personajes];
      }

    constructor(){
        console.log('servicio inicializado');
    }
}