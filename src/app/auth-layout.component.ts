import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'auth-main-layout',
  templateUrl: './auth-layout.component.html',
  standalone: true,
  imports: [RouterOutlet],
})
export class AuthLayoutComponent {}
