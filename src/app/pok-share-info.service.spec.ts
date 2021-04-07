import { TestBed } from '@angular/core/testing';

import { PokShareInfoService } from './pok-share-info.service';

describe('PokShareInfoService', () => {
  let service: PokShareInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokShareInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
