import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PedidosComponent } from './pedidos/pedidos.component';

export const routes: Routes = [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'pedidos', component: PedidosComponent},
];
