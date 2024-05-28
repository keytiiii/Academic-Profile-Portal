import { Component, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalAddComponent } from '../modal-add/modal-add.component';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PorfolioType, ProjectType } from '../../types';
import { ModalInfoComponent } from '../modal-info/modal-info.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    CommonModule,
    ModalAddComponent,
    ReactiveFormsModule,
    ModalInfoComponent,
  ],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  constructor(private formBuilder: FormBuilder, private toastr: ToastrService) {
    this.addPortfolio = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      gitUrl: ['', [Validators.required]],
    });
  }

  portfolioData: ProjectType[] = [];
  modalVisible = false;
  modalInfoVisible = false;
  addPortfolio!: FormGroup;
  selectedItem: ProjectType | null = null;

  openInfoModal(item: ProjectType) {
    this.selectedItem = item;
    this.modalInfoVisible = true;
  }

  handleCloseInfo() {
    this.modalInfoVisible = false;
  }

  open() {
    this.modalVisible = true;
  }

  handleClose() {
    this.modalVisible = false;
  }

  ngOnInit(): void {
    this.fetchData();
  }

  async fetchData() {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      this.toastr.error('User ID not found!', 'Error');
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:8000/get/portfolio/${userId}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      this.portfolioData = data.projects;
      console.log(this.portfolioData);
    } catch (error) {
      console.error('Error fetching data:', error);
      this.toastr.error('Error fetching data!', 'Error');
    }
  }

  async onSubmit() {
    const values: PorfolioType = this.addPortfolio.value;

    const userId = localStorage.getItem('userId');
    if (!userId) {
      this.toastr.error('User ID not found!', 'Error');
      return;
    }

    values.userId = parseInt(userId, 10);

    try {
      const response = await fetch('http://localhost:8000/addportfolio', {
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
      this.toastr.success(values.title, 'Success');
    } catch (error) {
      this.toastr.error('Error adding user!', 'Error');
    }
  }
}
