import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent implements OnInit{ 

  //Variable que se especifica en la etiqueta del componente
  @Input() texto = '';
  //Variable que se especifica en la etiqueta del componente
  @Input() identificador = '';

  //Variable que almacenara el valor del input
  value = '';

  // Variable que se encargara de emitir el valor del input
  @Output() valorInput: EventEmitter<string> = new EventEmitter<string>();

  //Funcion que se encarga de emitir el valor del input despues de que se cargue la pagina
  ngOnInit(): void {
    //Emitir el valor del input
    this.valorInput.emit(this.value);
  }


}
