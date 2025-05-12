import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesError404Component } from './movies-error404.component';

describe('MoviesError404Component', () => {
  let component: MoviesError404Component;
  let fixture: ComponentFixture<MoviesError404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviesError404Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesError404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
