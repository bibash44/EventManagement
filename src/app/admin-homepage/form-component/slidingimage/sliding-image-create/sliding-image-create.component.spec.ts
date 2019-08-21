import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidingImageCreateComponent } from './sliding-image-create.component';

describe('SlidingImageCreateComponent', () => {
  let component: SlidingImageCreateComponent;
  let fixture: ComponentFixture<SlidingImageCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidingImageCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidingImageCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
