/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MymoviesService } from './mymovies.service';

describe('MymoviesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MymoviesService]
    });
  });

  it('should ...', inject([MymoviesService], (service: MymoviesService) => {
    expect(service).toBeTruthy();
  }));
});
