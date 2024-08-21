import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent implements OnInit{

  @Input() texto = '';
  @Input() identificador = '';

  @Output() inpu: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
    this.inputId.emit(this.identificador);
  }


}
