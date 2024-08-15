import { Component } from '@angular/core';
import { HeaderSectionComponent } from "../header-section/header-section.component";
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [HeaderSectionComponent, TableModule],
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.scss'
})
export class PedidosComponent {


  productos = [{
    ids: 1,
    nombre_cliente: 'Juan',
    pares: 120,
    subtotal: `$${2000}`,
    fecha_registro: new Date('2024-06-03'),
    estatus: 'En proceso'
  },
  {
    ids: 2,
    nombre_cliente: 'Pepe',
    pares: 50,
    subtotal: `$${100}`,
    fecha_registro: new Date('2024-06-03'),
    estatus: 'En proceso'

  },
  {
    ids: 3,
    nombre_cliente: 'Toribio',
    pares: 10000,
    subtotal: `$${20000000}`,
    fecha_registro: new Date('2024-06-03'),
    estatus: 'En proceso'
  },
  {
    ids: 4,
    nombre_cliente: 'Alonso',
    pares: 1,
    subtotal: `$${1500}`,
    fecha_registro: new Date('2024-06-03'),
    estatus: 'Entregado'
  },]
}
