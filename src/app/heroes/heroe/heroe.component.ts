import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'

})
export class HeroeComponent{

    nombre: String='Jhonatan';
    edad   : number= 28;

    get nombreCapitalizado() {
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): String {
        return `${this.nombre} - ${this.edad}`;
        /* return this.nombre +'-'+ this.edad; */
    }

    cambiarNombre(): void {
        this.nombre='Franky';
    }

    cambiarEdad(): void {
        this.edad = 18;
    }



}