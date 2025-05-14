import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAgendaComponent } from './main-agenda.component';

describe('MainAgendaComponent', () => {
  let component: MainAgendaComponent;
  let fixture: ComponentFixture<MainAgendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainAgendaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
