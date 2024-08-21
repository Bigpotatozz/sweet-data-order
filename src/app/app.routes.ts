import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { CrearPedidoComponent } from './crear-pedido/crear-pedido.component';

export const routes: Routes = [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'pedidos', component: PedidosComponent},
    {path: 'crear-pedido', component: CrearPedidoComponent}
];
