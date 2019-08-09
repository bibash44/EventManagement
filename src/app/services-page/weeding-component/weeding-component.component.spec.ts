import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeedingComponentComponent } from './weeding-component.component';

describe('WeedingComponentComponent', () => {
  let component: WeedingComponentComponent;
  let fixture: ComponentFixture<WeedingComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeedingComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeedingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
