import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFeedbackComponent } from './main-feedback.component';

describe('MainFeedbackComponent', () => {
  let component: MainFeedbackComponent;
  let fixture: ComponentFixture<MainFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainFeedbackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
