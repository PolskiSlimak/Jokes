import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwopartJokesComponent } from './twopart-jokes.component';

describe('TwopartJokesComponent', () => {
  let component: TwopartJokesComponent;
  let fixture: ComponentFixture<TwopartJokesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwopartJokesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwopartJokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
