import { TestBed, inject } from '@angular/core/testing';

import { PresenceService } from './presence.service';

describe('PresenceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PresenceService]
    });
  });

  it('should ...', inject([PresenceService], (service: PresenceService) => {
    expect(service).toBeTruthy();
  }));
});
