import { TestBed, inject } from '@angular/core/testing';

import { SchuelerService } from './schueler.service';

describe('SchuelerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SchuelerService]
    });
  });

  it('should ...', inject([SchuelerService], (service: SchuelerService) => {
    expect(service).toBeTruthy();
  }));
});
