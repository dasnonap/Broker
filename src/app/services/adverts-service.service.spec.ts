import { TestBed } from '@angular/core/testing';

import { AdvertsService } from './adverts-service.service';

describe('AdvertsServiceService', () => {
  let service: AdvertsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdvertsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
