import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainloginComponent } from './main-login.component'; 


describe('MainloginComponent', () => {
  let component: MainloginComponent;
  let fixture: ComponentFixture<MainloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainloginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
