import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  selectedDepartment: string = '';
  selectedProgram: string = '';
  
  departments = [
    {
      name: 'College of Education, Arts and Sciences',
      programs: ['Bachelor of Elementary Education (BEEd)', 'Bachelor of Early Childhood Education (BECEd)', 'Bachelor of Secondary Education - Major in English(BSEd-E)', 'Bachelor of Secondary Education - Major in Filipino(BSEd-FIL)', 'Bachelor of Secondary Education - Major in Math(BSEd-M)', 'Bachelor of Secondary Education - Major in Science(BSEd-SCI)', 'Bachelor of Secondary Education - Major in Social Studies(BSEd-SOC)', 'Bachelor of Physical Education (BPEd)', 'Bachelor of Cultural and Arts Education (BCAEd)', 'Bachelor of Arts in Communication (BACOM)', 'Teacher Certificate Program (TCP)']
    },
    {
      name: 'College of Computer Studies',
      programs: ['Bachelor of Science in Computer Science (BSCS)', 'Bachelor of Science in Information Technology (BSIT)', 'Bachelor of Science in Entertainment and Multimedia Computing (BSEMC)', 'Associate in Computer Technology (ACT)']
    },
    {
      name: 'College of Business and Accountancy',
      programs: ['Bachelor of Science in Accountancy (BSA)', 'Bachelor of Science in Customs Administration (BSCA)', 'Bachelor of Science in Business Administration - Major in Financial Management (BSBA-FM)', 'Bachelor of Science in Business Administration - Major in Human Resource Management(BSBA-HRM)', 'Bachelor of Science in Business Administration - Major in Marketing Management(BSBA-MKT)']
    },
    {
      name: 'College of Allied Health Studies',
      programs: ['Bachelor of Science in Nursing (BSN)', 'Bachelor of Science in Midwifery (BSM)', 'Graduate in Midwifery (GM)']
    },
    {
      name: 'College of Hospitality and Tourism Management',
      programs: ['Bachelor of Science in Hospitality Management (BSHM)', 'Bachelor of Science in Tourism Management (BSTM)']
    }
  ];

  onDepartmentChange(departmentName: string) {
    this.selectedDepartment = departmentName;
    this.selectedProgram = '';
  }
}
