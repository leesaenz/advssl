/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UpcomingService } from './upcoming.service';

describe('UpcomingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpcomingService]
    });
  });

  it('should ...', inject([UpcomingService], (service: UpcomingService) => {
    expect(service).toBeTruthy();
  }));
});
