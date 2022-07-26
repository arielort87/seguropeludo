import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorqueComponent } from './porque.component';

describe('PorqueComponent', () => {
  let component: PorqueComponent;
  let fixture: ComponentFixture<PorqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PorqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
