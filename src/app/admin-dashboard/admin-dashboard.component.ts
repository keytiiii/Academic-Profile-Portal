import { Component } from '@angular/core';
import { SidebarComponent } from '../layout/sidebar/sidebar.component';
import { TopbarComponent } from '../topbar/topbar.component';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [SidebarComponent, TopbarComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css',
})
export class AdminDashboardComponent {}
