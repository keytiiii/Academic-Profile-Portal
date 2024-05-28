import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-add.component.html',
  styleUrls: ['./modal-add.component.css'],
})
export class ModalAddComponent {
  @Input() isVisible = false;
  @Output() closeEvent = new EventEmitter<void>();

  close() {
    this.isVisible = false;
    this.closeEvent.emit();
  }
}
