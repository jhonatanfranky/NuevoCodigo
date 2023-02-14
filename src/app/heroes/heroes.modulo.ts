import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from "./listado/listado.component";



@NgModule({
    /* es un arreglo que cosas contiene este modulo */
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    exports: [
        ListadoComponent
    ],
    //aqui es de
    imports: [
        CommonModule
    ]
})
export class heroesModulo{}
