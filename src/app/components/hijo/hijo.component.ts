import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {
  
  @Input() textoHijo:string = "hola";
  // result: any;

  // constructor(){
  //   this.result = this.textoHijo.toUpperCase();
  // }
  
 

}