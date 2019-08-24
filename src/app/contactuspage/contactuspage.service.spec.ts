import { TestBed } from '@angular/core/testing';

import { ContactuspageService } from './contactuspage.service';

describe('ContactuspageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContactuspageService = TestBed.get(ContactuspageService);
    expect(service).toBeTruthy();
  });
});
