import { Component } from '@angular/core';
import { SidebarComponent } from '../layout/sidebar/sidebar.component';
import { TopbarComponent } from '../topbar/topbar.component';
import { MidbarComponent } from '../midbar/midbar.component';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-student-dashboard',
  standalone: true,
  imports: [ SidebarComponent, TopbarComponent, MidbarComponent, HomeComponent],
  templateUrl: './student-dashboard.component.html',
  styleUrl: './student-dashboard.component.css'
})
export class StudentDashboardComponent {

}
