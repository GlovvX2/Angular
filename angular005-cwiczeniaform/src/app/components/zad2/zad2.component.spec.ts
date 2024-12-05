import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zad2Component } from './zad2.component';

describe('Zad2Component', () => {
  let component: Zad2Component;
  let fixture: ComponentFixture<Zad2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Zad2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Zad2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
