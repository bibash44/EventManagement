import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesDisplayEditComponent } from './services-display-edit.component';

describe('ServicesDisplayEditComponent', () => {
  let component: ServicesDisplayEditComponent;
  let fixture: ComponentFixture<ServicesDisplayEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesDisplayEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesDisplayEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
