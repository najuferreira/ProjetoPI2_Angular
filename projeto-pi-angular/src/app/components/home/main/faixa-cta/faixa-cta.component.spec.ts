import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaixaCtaComponent } from './faixa-cta.component';

describe('FaixaCtaComponent', () => {
  let component: FaixaCtaComponent;
  let fixture: ComponentFixture<FaixaCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaixaCtaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaixaCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
