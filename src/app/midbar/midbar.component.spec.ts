import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidbarComponent } from './midbar.component';

describe('MidbarComponent', () => {
  let component: MidbarComponent;
  let fixture: ComponentFixture<MidbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MidbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MidbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
