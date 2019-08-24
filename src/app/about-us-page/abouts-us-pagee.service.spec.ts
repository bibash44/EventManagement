import { TestBed } from '@angular/core/testing';

import { AboutsUsPageeService } from './abouts-us-pagee.service';

describe('AboutsUsPageeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AboutsUsPageeService = TestBed.get(AboutsUsPageeService);
    expect(service).toBeTruthy();
  });
});
