import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css',
})
export class TopbarComponent {
  constructor(private toastr: ToastrService, private router: Router) {}

  async logout() {
    try {
      localStorage.removeItem('userId');
      const response = await fetch('http://localhost:8000/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to sign in');
      }
      this.router.navigate(['/login']);

      this.toastr.success('Logout Successfull', 'Success');
    } catch (error) {
      this.toastr.error('Error adding user!', 'Error');
    }
  }
}
