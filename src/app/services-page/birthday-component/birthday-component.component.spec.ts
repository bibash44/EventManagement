import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdayComponentComponent } from './birthday-component.component';

describe('BirthdayComponentComponent', () => {
  let component: BirthdayComponentComponent;
  let fixture: ComponentFixture<BirthdayComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirthdayComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthdayComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
