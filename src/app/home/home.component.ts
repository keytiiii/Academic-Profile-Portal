import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentDashboardComponent } from '../student-dashboard/student-dashboard.component';
import { FeedbackComponent } from '../feedback/feedback.component';

interface projectImage {}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [StudentDashboardComponent, FeedbackComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  @Input() images: projectImage[] = [];

  selectedIndex = 0;

  ngOnInit(): void {}
}
