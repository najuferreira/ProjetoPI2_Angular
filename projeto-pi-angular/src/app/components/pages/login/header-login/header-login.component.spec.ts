import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderloginComponent } from './header-login.component';

describe('HeaderLoginComponent', () => {
  let component: HeaderloginComponent;
  let fixture: ComponentFixture<HeaderloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderloginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
