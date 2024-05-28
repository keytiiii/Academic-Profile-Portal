import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-modal-content',
  standalone: true,
  imports: [FormBuilder],
  templateUrl: './modal-content.component.html',
  styleUrl: './modal-content.component.css'
})
export class ModalContentComponent {

  @Input() data: IProject | null = null;
  @Output() onCloseModel = new EventEmitter();

  projectForm: any;

  constructor(
    private fb: FormBuilder,
    private projectService: ProjectService
  ) {
    this.projectForm = this.fb.group({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      file: new FormControl('', [Validators.required])
    });
  } 

//   files: File[] = [];

// onSelect(event: { addedFiles: any; }) {
//   console.log(event);
//   this.files.push(...event.addedFiles);
// }

// onRemove(event: File) {
//   console.log(event);
//   this.files.splice(this.files.indexOf(event), 1);
// }

  onClose(){
    this.onCloseModel.emit(false);
  }

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
