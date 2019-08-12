import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeedingImagesComponent } from './weeding-images.component';

describe('WeedingImagesComponent', () => {
  let component: WeedingImagesComponent;
  let fixture: ComponentFixture<WeedingImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeedingImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeedingImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
