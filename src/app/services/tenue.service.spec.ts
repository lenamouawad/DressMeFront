import { TestBed } from '@angular/core/testing';

import { TenueService } from './tenue.service';

describe('TenueService', () => {
  let service: TenueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TenueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
