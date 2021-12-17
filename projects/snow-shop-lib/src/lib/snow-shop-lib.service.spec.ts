import { TestBed } from '@angular/core/testing';

import { SnowShopLibService } from './snow-shop-lib.service';

describe('SnowShopLibService', () => {
  let service: SnowShopLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SnowShopLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
