import { TestBed } from '@angular/core/testing';

import { PreAuthService } from './pre-auth.service';

describe('PreAuthService', () => {
  let service: PreAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
