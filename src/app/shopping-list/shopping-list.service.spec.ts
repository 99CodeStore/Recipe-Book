import { TestBed } from '@angular/core/testing';

import { ShopingListService } from './shopping-list.service';

describe('ShopingListService', () => {
  let service: ShopingListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopingListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
