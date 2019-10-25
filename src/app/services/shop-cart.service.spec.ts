import { TestBed } from '@angular/core/testing';

import { ShopCartService } from './shop-cart.service';

describe('ShopCartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShopCartService = TestBed.get(ShopCartService);
    expect(service).toBeTruthy();
  });
});
