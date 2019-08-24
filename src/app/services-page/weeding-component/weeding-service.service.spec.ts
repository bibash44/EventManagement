import { TestBed } from '@angular/core/testing';

import { WeedingServiceService } from './weeding-service.service';

describe('WeedingServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeedingServiceService = TestBed.get(WeedingServiceService);
    expect(service).toBeTruthy();
  });
});
