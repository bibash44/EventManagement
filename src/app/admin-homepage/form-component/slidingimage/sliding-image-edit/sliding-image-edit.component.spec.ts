import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidingImageEditComponent } from './sliding-image-edit.component';

describe('SlidingImageEditComponent', () => {
  let component: SlidingImageEditComponent;
  let fixture: ComponentFixture<SlidingImageEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidingImageEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidingImageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
