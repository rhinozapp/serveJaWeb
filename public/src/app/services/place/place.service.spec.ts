import { TestBed, inject } from '@angular/core/testing';

import { PlaceService } from './users.service';

describe('PlaceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlaceService]
    });
  });

  it('should be created', inject([PlaceService], (service: PlaceService) => {
    expect(service).toBeTruthy();
  }));
});
