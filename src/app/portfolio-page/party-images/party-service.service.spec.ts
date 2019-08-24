import { TestBed } from '@angular/core/testing';

import { PartyServiceService } from './party-service.service';

describe('PartyServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PartyServiceService = TestBed.get(PartyServiceService);
    expect(service).toBeTruthy();
  });
});
