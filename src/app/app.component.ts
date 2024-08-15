import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import {ButtonModule} from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { NavbarComponent } from "./navbar/navbar.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ButtonModule, CalendarModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(private primeNGConfig: PrimeNGConfig) {
    this.primeNGConfig.ripple = true; 
  }

  title = 'sweet_data_order';

  date: Date = new Date();
}
