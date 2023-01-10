import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // SESION 14:
  textoPadre!:string;

  // SESION 15:
  titulo = "Data Binding Interpolation"
  To_way: string = 
  
  "El two-way data bindin en Angular nos permite modificar el valor de una propiedad en la vista el valor tambien se actualiza en el modelo de datos";

  show = false;
  estadoBoton = "OCULTAR"

  estado(){
    if (this.show) {
      this.estadoBoton = "OCULTAR"
    } else{
      this.estadoBoton = "MOSTRAR"
    }
    return
  }

  ocultar(){
    console.log(this.show)

    this.show = !this.show;

    this.estado();
 
    // this.show = true
    console.log(this.show)
    
  }

}
