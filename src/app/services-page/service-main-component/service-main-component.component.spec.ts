import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceMainComponentComponent } from './service-main-component.component';

describe('ServiceMainComponentComponent', () => {
  let component: ServiceMainComponentComponent;
  let fixture: ComponentFixture<ServiceMainComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceMainComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceMainComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
