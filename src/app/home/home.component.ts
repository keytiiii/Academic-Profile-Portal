import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentDashboardComponent } from '../student-dashboard/student-dashboard.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [StudentDashboardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
