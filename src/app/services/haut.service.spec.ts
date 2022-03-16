import { TestBed } from '@angular/core/testing';

import { HautService } from './haut.service';

describe('HautService', () => {
  let service: HautService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HautService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
