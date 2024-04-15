import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HospitalComponent } from './hospital.component';
import { HttpClientModule } from '@angular/common/http';
import { MedicoService } from '../medico.service';

xdescribe('HospitalComponent', () => {
  let component: HospitalComponent;
  let fixture : ComponentFixture<HospitalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HospitalComponent, HttpClientModule],
      providers: [MedicoService]
    });

    fixture = TestBed.createComponent(HospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});