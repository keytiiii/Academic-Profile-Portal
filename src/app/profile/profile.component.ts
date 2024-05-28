import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  dropdownVisible: { [key: string]: boolean } = {
    workExperience: false,
    education: false,
    certification: false,
    skills: false
  };

  toggleDropdown(section: string): void {
    // Toggle the visibility of the dropdown for the specified section
    this.dropdownVisible[section] = !this.dropdownVisible[section];
  }
}
