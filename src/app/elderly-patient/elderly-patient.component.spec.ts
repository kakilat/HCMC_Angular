import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElderlyPatientComponent } from './elderly-patient.component';

describe('ElderlyPatientComponent', () => {
  let component: ElderlyPatientComponent;
  let fixture: ComponentFixture<ElderlyPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElderlyPatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElderlyPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
