import { Component } from '@angular/core';
import { HeaderSectionComponent } from "../header-section/header-section.component";

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [HeaderSectionComponent],
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.scss'
})
export class PedidosComponent {

}
