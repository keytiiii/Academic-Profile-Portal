
import { TopbarComponent } from '../topbar/topbar.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  standalone: true,
  imports: [ TopbarComponent],
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  
}
