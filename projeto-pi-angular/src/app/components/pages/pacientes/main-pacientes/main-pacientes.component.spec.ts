import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPacientesComponent } from './main-pacientes.component';

describe('MainPacientesComponent', () => {
  let component: MainPacientesComponent;
  let fixture: ComponentFixture<MainPacientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainPacientesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
