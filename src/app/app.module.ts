// aqui importamos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ContadorModul } from './contador/contador.module';
import { ContadorComponent } from './contador/contador/contador.component';
import { DbzModule } from './dbz/dbz.module';
import { heroesModulo } from './heroes/heroes.modulo';


//import { ContadorModulo, ContadorModule } from './contador/contador.module';
//import { ContadorComponent } from './contador/contador/contador.component';
//import { Contador2Component } from './contador2/contador2.component';
// por que ya estan en el listado del modulo heroes.modulo.ts
/* import { HeroeComponent } from './heroes/heroe/heroe.component';
import { ListadoComponent } from './heroes/listado/listado.component'; */

@NgModule({
  declarations: [
    AppComponent,
    // aqui llamamos a nuestros componentes
     //ContadorComponent
     //Contador2Component
   /*  HeroeComponent,
    ListadoComponent */
  ],
  imports: [
    BrowserModule,
    heroesModulo,
    DbzModule,
    ContadorModul
  ],
  providers: [],
  // componente principal 
  bootstrap: [AppComponent]
})
export class AppModule { }
