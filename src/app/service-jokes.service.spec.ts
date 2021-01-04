import { TestBed } from '@angular/core/testing';

import { ServiceJokesService } from './service-jokes.service';

describe('ServiceJokesService', () => {
  let service: ServiceJokesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceJokesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
