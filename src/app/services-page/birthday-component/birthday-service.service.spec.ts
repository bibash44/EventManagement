import { TestBed } from '@angular/core/testing';

import { BirthdayServiceService } from './birthday-service.service';

describe('BirthdayServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BirthdayServiceService = TestBed.get(BirthdayServiceService);
    expect(service).toBeTruthy();
  });
});
