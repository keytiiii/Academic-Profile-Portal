import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AccountType } from '../../types';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, ToastrModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private formBuilder: FormBuilder, private toastr: ToastrService, private router : Router) {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      department: [this.departments[0].name, Validators.required],
      program: [this.selectedDepartmentPrograms[0], Validators.required],
      password: ['', Validators.required],
      cpassword: ['', Validators.required],
      gender: ['', Validators.required],
    });
  }

  registerForm!: FormGroup;
  selectedDepartment: string = '';
  selectedProgram: string = '';

  departments = [
    {
      name: 'College of Education, Arts and Sciences',
      programs: [
        'Bachelor of Elementary Education (BEEd)',
        'Bachelor of Early Childhood Education (BECEd)',
        'Bachelor of Secondary Education - Major in English(BSEd-E)',
        'Bachelor of Secondary Education - Major in Filipino(BSEd-FIL)',
        'Bachelor of Secondary Education - Major in Math(BSEd-M)',
        'Bachelor of Secondary Education - Major in Science(BSEd-SCI)',
        'Bachelor of Secondary Education - Major in Social Studies(BSEd-SOC)',
        'Bachelor of Physical Education (BPEd)',
        'Bachelor of Cultural and Arts Education (BCAEd)',
        'Bachelor of Arts in Communication (BACOM)',
        'Teacher Certificate Program (TCP)',
      ],
    },
    {
      name: 'College of Computer Studies',
      programs: [
        'Bachelor of Science in Computer Science (BSCS)',
        'Bachelor of Science in Information Technology (BSIT)',
        'Bachelor of Science in Entertainment and Multimedia Computing (BSEMC)',
        'Associate in Computer Technology (ACT)',
      ],
    },
    {
      name: 'College of Business and Accountancy',
      programs: [
        'Bachelor of Science in Accountancy (BSA)',
        'Bachelor of Science in Customs Administration (BSCA)',
        'Bachelor of Science in Business Administration - Major in Financial Management (BSBA-FM)',
        'Bachelor of Science in Business Administration - Major in Human Resource Management(BSBA-HRM)',
        'Bachelor of Science in Business Administration - Major in Marketing Management(BSBA-MKT)',
      ],
    },
    {
      name: 'College of Allied Health Studies',
      programs: [
        'Bachelor of Science in Nursing (BSN)',
        'Bachelor of Science in Midwifery (BSM)',
        'Graduate in Midwifery (GM)',
      ],
    },
    {
      name: 'College of Hospitality and Tourism Management',
      programs: [
        'Bachelor of Science in Hospitality Management (BSHM)',
        'Bachelor of Science in Tourism Management (BSTM)',
      ],
    },
  ];

  async onSubmit() {
    const values: AccountType = this.registerForm.value;
    if (values.password !== this.registerForm.value.cpassword) {
      this.toastr.error('Passwords do not match!', 'Error');
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Failed to sign in');
      }

      const data = await response.json();
      console.log(data);
      this.toastr.success('User registered successfully!', 'Success');
      this.router.navigate(['/login']);
    } 
    
    catch (error) {
      this.toastr.error('Error adding user!', 'Error');
    }
  }
  selectedDepartmentPrograms: string[] = [];
  onDepartmentChange(event: any) {
    const selectedDepartment = event.target.value;
    const department = this.departments.find(
      (dep) => dep.name === selectedDepartment
    );
    this.selectedDepartmentPrograms = department ? department.programs : [];
  }
}
