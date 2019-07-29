import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientspageComponent } from './clientspage.component';

describe('ClientspageComponent', () => {
  let component: ClientspageComponent;
  let fixture: ComponentFixture<ClientspageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientspageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
