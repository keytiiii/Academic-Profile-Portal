import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-content',
  standalone: true,
  imports: [],
  templateUrl: './modal-content.component.html',
  styleUrl: './modal-content.component.css'
})
export class ModalContentComponent {

  files: File[] = [];

onSelect(event: { addedFiles: any; }) {
  console.log(event);
  this.files.push(...event.addedFiles);
}

onRemove(event: File) {
  console.log(event);
  this.files.splice(this.files.indexOf(event), 1);
}
}
