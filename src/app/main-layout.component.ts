import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopbarComponent } from './topbar/topbar.component';
import { MidbarComponent } from './midbar/midbar.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  styleUrl: './app.component.css',
  templateUrl: './main-layout.component.html',
  imports: [RouterOutlet, TopbarComponent, MidbarComponent],
})
export class MainLayoutComponent {}
