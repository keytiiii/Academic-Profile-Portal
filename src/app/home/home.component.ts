import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeedbackComponent } from '../feedback/feedback.component';
import { ToastrService } from 'ngx-toastr';
import { AccountType, ProjectType } from '../../types';
import { CommonModule } from '@angular/common';

interface projectImage {}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FeedbackComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  @Input() images: projectImage[] = [];

  constructor(private toastr: ToastrService) {}

  user: AccountType | null = null;
  portfolio: ProjectType | null = null;
  selectedIndex = 0;

  ngOnInit(): void {
    this.fetchData();
  }

  async fetchData() {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      this.toastr.error('User ID not found!', 'Error');
      return;
    }

    try {
      const response = await fetch(`http://localhost:8000/get/user/${userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      this.user = data.user;
      console.log(data.user);
      if (Array.isArray(data.user.Porfolio) && data.user.Porfolio.length > 0) {
        this.portfolio = data.user.Porfolio[0];
      } else {
        this.portfolio = null;
        console.warn('No portfolio data available');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      this.toastr.error('Error fetching data!', 'Error');
    }
  }
}
