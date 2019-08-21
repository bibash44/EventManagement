import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessStoryCreateComponent } from './success-story-create.component';

describe('SuccessStoryCreateComponent', () => {
  let component: SuccessStoryCreateComponent;
  let fixture: ComponentFixture<SuccessStoryCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessStoryCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessStoryCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
