import { Component } from '@angular/core';
import { SidebarComponent } from '../layout/sidebar/sidebar.component';
@Component({
  selector: 'app-student-dashboard',
  standalone: true,
  imports: [ SidebarComponent],
  templateUrl: './student-dashboard.component.html',
  styleUrl: './student-dashboard.component.css'
})
export class StudentDashboardComponent {

}
