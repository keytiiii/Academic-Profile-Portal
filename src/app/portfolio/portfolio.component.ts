import { Component } from '@angular/core';
import { ModalContentComponent } from '../portfolio/modal-content/modal-content.component';
import { MatDialog, MatDialogModule, MatDialogActions } from '@angular/material/dialog';
import { TopbarComponent } from '../topbar/topbar.component';
import { MidbarComponent } from '../midbar/midbar.component';
import { HomeComponent } from '../home/home.component';
import { CardComponent } from './card-component/card.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ModalContentComponent, MatDialogModule, MatDialogActions, TopbarComponent, MidbarComponent, HomeComponent, CardComponent, CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  title = 'angular-dialog';

  constructor(private matDialog: MatDialog){

  }

  openDialog(){
    this.matDialog.open(ModalContentComponent,{
      width: '1000px',
    })
  }

  cardsData = [
    {
      id: 1,
      title: 'Python Captain America',
      content: 'Content of this is captain america',
    },
    {
      id: 2,
      title: 'Python Captain Brazil',
      content: 'Content of this is captain brazil',
    },
    {
      id: 3,
      title: 'Python Captain Canada',
      content: 'Content of this is captain canada',
    },
    {
      id: 4,
      title: 'Python Captain Philippines',
      content: 'Content of this is captain Philippines',
    },
    {
      id: 5,
      title: 'Python Captain China',
      content: 'Content of this is captain china',
    },
  ];
}
