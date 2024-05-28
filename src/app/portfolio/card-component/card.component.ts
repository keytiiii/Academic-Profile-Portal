import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule, MatDialogActions } from '@angular/material/dialog';
import { CardModalComponent } from '../card-modal/card-modal.component';

@Component({
  selector: 'card-component',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatDialogActions, CardModalComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() data: any;
  
  constructor(private matDialog: MatDialog){

  }

  openDialog(){
    this.matDialog.open(CardModalComponent,{
      width: '800px',
    })
  }

}
