import { ComponentFixture, TestBed } from '@angular/core/testing';
<<<<<<< HEAD

=======
import { FormsModule } from '@angular/forms'; // Add this import
>>>>>>> 0e1c64f9a80c5c4c14003375d77428d62d6fcc9d
import { SettingsComponent } from './settings.component';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
<<<<<<< HEAD
      imports: [SettingsComponent]
    })
    .compileComponents();
    
=======
      declarations: [ SettingsComponent ],
      imports: [ FormsModule ] // Add FormsModule here
    })
    .compileComponents();
  });

  beforeEach(() => {
>>>>>>> 0e1c64f9a80c5c4c14003375d77428d62d6fcc9d
    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

<<<<<<< HEAD
  it('should create', () => {
=======
  it('should create the component', () => {
>>>>>>> 0e1c64f9a80c5c4c14003375d77428d62d6fcc9d
    expect(component).toBeTruthy();
  });
});
