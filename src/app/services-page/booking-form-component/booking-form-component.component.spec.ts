import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingFormComponentComponent } from './booking-form-component.component';

describe('BookingFormComponentComponent', () => {
  let component: BookingFormComponentComponent;
  let fixture: ComponentFixture<BookingFormComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingFormComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
