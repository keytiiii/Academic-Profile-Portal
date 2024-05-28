
import { TopbarComponent } from '../topbar/topbar.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  standalone: true,
  imports: [TopbarComponent],
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  constructor() {}

  ngOnInit() {
  }

  url: string|null|ArrayBuffer = './assets/icon.png' 

  onFileSelected(files: FileList | null) {
    if (files) {
        var reader = new FileReader()
        reader.readAsDataURL(files[0])
        reader.onload = (event:Event) => {
          let fileReader = event.target as FileReader
          this.url = fileReader.result;
        }
    }
  }

}
