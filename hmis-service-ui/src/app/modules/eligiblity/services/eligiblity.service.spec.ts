import { TestBed } from '@angular/core/testing';

import { EligiblityService } from './eligiblity.service';

describe('EligiblityService', () => {
  let service: EligiblityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EligiblityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
