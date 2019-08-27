import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsreviewComponent } from './clientsreview.component';

describe('ClientsreviewComponent', () => {
  let component: ClientsreviewComponent;
  let fixture: ComponentFixture<ClientsreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
