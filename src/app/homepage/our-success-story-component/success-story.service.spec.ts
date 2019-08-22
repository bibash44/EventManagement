import { TestBed } from '@angular/core/testing';

import { SuccessStoryService } from './success-story.service';

describe('SuccessStoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SuccessStoryService = TestBed.get(SuccessStoryService);
    expect(service).toBeTruthy();
  });
});
