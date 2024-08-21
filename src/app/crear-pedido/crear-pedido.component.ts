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

  //Incializa la variable que va a recibir la emision del hijo
  valorInput = '';
  //funcion que maneja la emision del hijo
  handleInput(value: string) {
    //asigna el valor que se emitio del hijo a la variable previamente creada
    this.valorInput = value;
  }

  imprimirValor(valor: string){ {

    alert(valor);

  }



  

 

}
}
