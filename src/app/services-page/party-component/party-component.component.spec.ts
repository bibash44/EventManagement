import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyComponentComponent } from './party-component.component';

describe('PartyComponentComponent', () => {
  let component: PartyComponentComponent;
  let fixture: ComponentFixture<PartyComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartyComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
