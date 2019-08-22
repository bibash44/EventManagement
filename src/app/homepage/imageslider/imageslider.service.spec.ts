import { TestBed } from '@angular/core/testing';

import { ImagesliderService } from './imageslider.service';

describe('ImagesliderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImagesliderService = TestBed.get(ImagesliderService);
    expect(service).toBeTruthy();
  });
});
