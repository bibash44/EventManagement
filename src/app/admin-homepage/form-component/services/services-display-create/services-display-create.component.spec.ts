import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesDisplayCreateComponent } from './services-display-create.component';

describe('ServicesDisplayCreateComponent', () => {
  let component: ServicesDisplayCreateComponent;
  let fixture: ComponentFixture<ServicesDisplayCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesDisplayCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesDisplayCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
