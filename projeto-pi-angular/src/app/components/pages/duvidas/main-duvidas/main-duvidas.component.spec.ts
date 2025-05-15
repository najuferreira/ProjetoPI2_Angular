import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDuvidasComponent } from './main-duvidas.component';

describe('MainDuvidasComponent', () => {
  let component: MainDuvidasComponent;
  let fixture: ComponentFixture<MainDuvidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainDuvidasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainDuvidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
