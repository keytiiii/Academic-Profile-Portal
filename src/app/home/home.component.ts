import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeedbackComponent } from '../feedback/feedback.component';
import { TopbarComponent } from '../topbar/topbar.component';
import { MidbarComponent } from '../midbar/midbar.component';

interface projectImage {}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FeedbackComponent,
    TopbarComponent,
    MidbarComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  @Input() images: projectImage[] = [];

  selectedIndex = 0;

  ngOnInit(): void {}
}
