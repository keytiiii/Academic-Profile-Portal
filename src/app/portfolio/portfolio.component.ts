import { Component } from '@angular/core';
import { ModalContentComponent } from '../modal-content/modal-content.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ModalContentComponent, MatDialogModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  title = 'angular-dialog';

  constructor(private matDialog: MatDialog){

  }

  openDialog(){
    this.matDialog.open(ModalContentComponent,{
      width: '3500px',
    })
  }

}
