import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtfolioCreateComponent } from './protfolio-create.component';

describe('ProtfolioCreateComponent', () => {
  let component: ProtfolioCreateComponent;
  let fixture: ComponentFixture<ProtfolioCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtfolioCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtfolioCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
