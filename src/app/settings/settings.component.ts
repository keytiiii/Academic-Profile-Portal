import { Component } from '@angular/core';
import { TopbarComponent } from '../topbar/topbar.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  standalone: true,
  imports: [TopbarComponent],
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  
}
