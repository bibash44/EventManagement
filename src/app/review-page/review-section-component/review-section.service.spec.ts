import { TestBed } from '@angular/core/testing';

import { ReviewSectionService } from './review-section.service';

describe('ReviewSectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReviewSectionService = TestBed.get(ReviewSectionService);
    expect(service).toBeTruthy();
  });
});
