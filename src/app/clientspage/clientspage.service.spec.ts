import { TestBed } from '@angular/core/testing';

import { ClientspageService } from './clientsreview/clientspage.service';

describe('ClientspageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClientspageService = TestBed.get(ClientspageService);
    expect(service).toBeTruthy();
  });
});
