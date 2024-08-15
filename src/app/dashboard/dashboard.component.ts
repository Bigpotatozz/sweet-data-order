import { Component, Input } from '@angular/core';
import { HeaderSectionComponent } from "../header-section/header-section.component";


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HeaderSectionComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
