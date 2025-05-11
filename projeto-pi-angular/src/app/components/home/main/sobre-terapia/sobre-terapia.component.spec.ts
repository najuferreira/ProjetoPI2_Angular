import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreTerapiaComponent } from './sobre-terapia.component';

describe('SobreTerapiaComponent', () => {
  let component: SobreTerapiaComponent;
  let fixture: ComponentFixture<SobreTerapiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SobreTerapiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobreTerapiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
