import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdayImagesComponent } from './birthday-images.component';

describe('BirthdayImagesComponent', () => {
  let component: BirthdayImagesComponent;
  let fixture: ComponentFixture<BirthdayImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirthdayImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthdayImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
