import { AfterViewInit, Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { InputComponent } from "../input/input.component";

@Component({
  selector: 'app-crear-pedido',
  standalone: true,
  imports: [InputComponent],
  templateUrl: './crear-pedido.component.html',
  styleUrl: './crear-pedido.component.scss'
})
export class CrearPedidoComponent{

  identificador = '';  
  handleInputId(value: string) {
    this.identificador = value;
  }



  

 

}
