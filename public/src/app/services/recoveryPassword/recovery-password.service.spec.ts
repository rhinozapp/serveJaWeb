import { TestBed, inject } from '@angular/core/testing';

import { RecoveryPasswordService } from './recovery-password.service';

describe('RecoveryPasswordService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecoveryPasswordService]
    });
  });

  it('should be created', inject([RecoveryPasswordService], (service: RecoveryPasswordService) => {
    expect(service).toBeTruthy();
  }));
});
