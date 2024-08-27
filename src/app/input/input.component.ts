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

  //variable que emititira el valor del input
  @Output() content: EventEmitter<string> = new EventEmitter<string>();

  //Variable que almacenara el valor del input
  value = '';

  ngOnInit(): void {
    this.content.emit(this.value);
  }

}
