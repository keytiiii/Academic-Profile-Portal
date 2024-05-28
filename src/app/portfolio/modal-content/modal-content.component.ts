import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-content',
  standalone: true,
  imports: [],
  templateUrl: './modal-content.component.html',
  styleUrl: './modal-content.component.css'
})
export class ModalContentComponent {

  


//   files: File[] = [];

// onSelect(event: { addedFiles: any; }) {
//   console.log(event);
//   this.files.push(...event.addedFiles);
// }

// onRemove(event: File) {
//   console.log(event);
//   this.files.splice(this.files.indexOf(event), 1);
// }


  // onSubmit() {
  //   if (this.projectForm.valid) {
  //     if (this.data) {
  //       this.projectService
  //         .updateProject(this.data._id as string, this.projectForm.value)
  //         .subscribe({
  //           next: (response: any) => {
  //             this.resetProjectForm();
  //             this.toastr.success(response.message);
  //           },
  //         });
  //     } else {
  //       this.employeeService.createEmployee(this.employeeForm.value).subscribe({
  //         next: (response: any) => {
  //           this.resetprojectForm();
  //           this.toastr.success(response.message);
  //         },
  //       });
  //     }
  //   } else {
  //     this.projectForm.markAllAsTouched();
  //   }
  // }
}
