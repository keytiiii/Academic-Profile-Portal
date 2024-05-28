import { Component } from '@angular/core';
import { TopbarComponent } from '../topbar/topbar.component';
import { MidbarComponent } from '../midbar/midbar.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  standalone: true,
  imports: [TopbarComponent, MidbarComponent],
})
export class ProfileComponent {
  dropdownVisible: { [key: string]: boolean } = {
    workExperience: false,
    education: false,
    certification: false,
    skills: false,
  };

  toggleDropdown(section: string): void {
    // Toggle the visibility of the dropdown for the specified section
    this.dropdownVisible[section] = !this.dropdownVisible[section];
  }
}
