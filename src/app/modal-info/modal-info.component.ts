import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-info.component.html',
  styleUrls: ['./modal-info.component.css'],
})
export class ModalInfoComponent {
  @Input() isInfoVisible = false;
  @Output() closeInfoEvent = new EventEmitter<void>();

  close() {
    this.isInfoVisible = false;
    this.closeInfoEvent.emit();
  }
}
