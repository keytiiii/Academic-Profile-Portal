import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentDashboardComponent } from '../student-dashboard/student-dashboard.component';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [StudentDashboardComponent],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent {

  constructor(private router: Router) {}

  redirectToDashboard() {
    this.router.navigate(['/student-dashboard']);
  }
}
