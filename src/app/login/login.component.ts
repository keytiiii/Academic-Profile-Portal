import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SigninType } from '../../types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, ToastrModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  async onSubmit() {
    const values: SigninType = this.loginForm.value;
    try {
      const response = await fetch('http://localhost:8000/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        this.toastr.success('Sign-in successful!', 'Success');
        this.router.navigate(['/home']);
      } else {
        throw new Error('Failed to sign in');
      }
    } catch (error) {
      this.toastr.error('Error signing in!', 'Error');
    }
  }
}
