import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServeicesPageComponent } from './services-page.component';

describe('ServeicesPageComponent', () => {
  let component: ServeicesPageComponent;
  let fixture: ComponentFixture<ServeicesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServeicesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServeicesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
