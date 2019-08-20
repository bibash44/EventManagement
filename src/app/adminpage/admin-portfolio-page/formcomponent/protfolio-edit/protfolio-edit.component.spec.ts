import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtfolioEditComponent } from './protfolio-edit.component';

describe('ProtfolioEditComponent', () => {
  let component: ProtfolioEditComponent;
  let fixture: ComponentFixture<ProtfolioEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtfolioEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtfolioEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
