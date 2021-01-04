import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchForJokesComponent } from './search-for-jokes.component';

describe('SearchForJokesComponent', () => {
  let component: SearchForJokesComponent;
  let fixture: ComponentFixture<SearchForJokesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchForJokesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchForJokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
