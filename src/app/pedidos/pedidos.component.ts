import { Component } from '@angular/core';
import { HeaderSectionComponent } from "../header-section/header-section.component";
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [HeaderSectionComponent, TableModule, ButtonModule, PaginatorModule, RouterLink, RouterLinkActive],
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.scss'
})
export class PedidosComponent {


  first = 0;
  rows = 10;
  totalRecords = 120;

 


  productos = [{
    ids: 1,
    nombre_cliente: 'Juan',
    pares: 120,
    subtotal: `$${2000}`,
    fecha_registro: new Date('2024-06-03').toLocaleDateString('es-ES'), // Formato DD/MM/AAAA
    estatus: 'En proceso',
    nombre_pedido: 'Pedido 1'
  },
  {
    ids: 2,
    nombre_cliente: 'Pepe',
    pares: 50,
    subtotal: `$${100}`,
    fecha_registro: new Date('2024-06-03').toLocaleDateString('es-ES'), // Formato DD/MM/AAAA
    estatus: 'En proceso',
    nombre_pedido: 'Pedido 2'
  },
  {
    ids: 3,
    nombre_cliente: 'Toribio',
    pares: 10000,
    subtotal: `$${20000000}`,
    fecha_registro: new Date('2024-06-03').toLocaleDateString('es-ES'), // Formato DD/MM/AAAA
    estatus: 'En proceso',
    nombre_pedido: 'Pedido 3'
  },
  {
    ids: 4,
    nombre_cliente: 'Alonso',
    pares: 1,
    subtotal: `$${1500}`,
    fecha_registro: new Date('2024-06-03').toLocaleDateString('es-ES'), // Formato DD/MM/AAAA
    estatus: 'Entregado',
    nombre_pedido: 'Pedido 4'
  },
  {
    ids: 5,
    nombre_cliente: 'Alonso',
    pares: 1,
    subtotal: `$${1500}`,
    fecha_registro: new Date('2024-06-03').toLocaleDateString('es-ES'), // Formato DD/MM/AAAA
    estatus: 'Entregado',
    nombre_pedido: 'Pedido 4'
  },
  {
    ids: 5,
    nombre_cliente: 'Alonso',
    pares: 1,
    subtotal: `$${1500}`,
    fecha_registro: new Date('2024-06-03').toLocaleDateString('es-ES'), // Formato DD/MM/AAAA
    estatus: 'Entregado',
    nombre_pedido: 'Pedido 4'
  },
  {
    ids: 5,
    nombre_cliente: 'Alonso',
    pares: 1,
    subtotal: `$${1500}`,
    fecha_registro: new Date('2024-06-03').toLocaleDateString('es-ES'), // Formato DD/MM/AAAA
    estatus: 'Entregado',
    nombre_pedido: 'Pedido 4'
  },
  {
    ids: 5,
    nombre_cliente: 'Alonso',
    pares: 1,
    subtotal: `$${1500}`,
    fecha_registro: new Date('2024-06-03').toLocaleDateString('es-ES'), // Formato DD/MM/AAAA
    estatus: 'Entregado',
    nombre_pedido: 'Pedido 4'
  },
  {
    ids: 5,
    nombre_cliente: 'Alonso',
    pares: 1,
    subtotal: `$${1500}`,
    fecha_registro: new Date('2024-06-03').toLocaleDateString('es-ES'), // Formato DD/MM/AAAA
    estatus: 'Entregado',
    nombre_pedido: 'Pedido 4'
  },
  {
    ids: 5,
    nombre_cliente: 'Alonso',
    pares: 1,
    subtotal: `$${1500}`,
    fecha_registro: new Date('2024-06-03').toLocaleDateString('es-ES'), // Formato DD/MM/AAAA
    estatus: 'Entregado',
    nombre_pedido: 'Pedido 4'
 },
 {
  ids: 5,
  nombre_cliente: 'Alonso',
  pares: 1,
  subtotal: `$${1500}`,
  fecha_registro: new Date('2024-06-03').toLocaleDateString('es-ES'), // Formato DD/MM/AAAA
  estatus: 'Entregado',
  nombre_pedido: 'Pedido 4'
},
{
  ids: 5,
  nombre_cliente: 'Alonso',
  pares: 1,
  subtotal: `$${1500}`,
  fecha_registro: new Date('2024-06-03').toLocaleDateString('es-ES'), // Formato DD/MM/AAAA
  estatus: 'Entregado',
  nombre_pedido: 'Pedido 4'
},
{
  ids: 5,
  nombre_cliente: 'Alonso',
  pares: 1,
  subtotal: `$${1500}`,
  fecha_registro: new Date('2024-06-03').toLocaleDateString('es-ES'), // Formato DD/MM/AAAA
  estatus: 'Entregado',
  nombre_pedido: 'Pedido 4'
},
{
  ids: 5,
  nombre_cliente: 'Alonso',
  pares: 1,
  subtotal: `$${1500}`,
  fecha_registro: new Date('2024-06-03').toLocaleDateString('es-ES'), // Formato DD/MM/AAAA
  estatus: 'Entregado',
  nombre_pedido: 'Pedido 4'
},
{
  ids: 5,
  nombre_cliente: 'Alonso',
  pares: 1,
  subtotal: `$${1500}`,
  fecha_registro: new Date('2024-06-03').toLocaleDateString('es-ES'), // Formato DD/MM/AAAA
  estatus: 'Entregado',
  nombre_pedido: 'Pedido 4'
}];


changePagination(start: number, end: number){
  let mostrarProductos = this.productos.slice(start, end);
  return mostrarProductos;
}

onPageChange(event: any) {
  this.first = event.first;
  this.rows = event.rows;
  this.changePagination(this.first, this.first + this.rows)

}


}


