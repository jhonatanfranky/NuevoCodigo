import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
 /*  styleUrls: ['./listado.component.css'] */
})
export class ListadoComponent {

  heroes: String[]= ['Spiderman','Ironman','Thor','Jhonatan','Capitan America'];
  heroeBorrado:String= '';

  borrarHeroe(){  
   this.heroeBorrado= this.heroes.shift() || '';
  }   

  
}
