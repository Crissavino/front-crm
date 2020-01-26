import { TestBed } from '@angular/core/testing';

import { CrmProductsService } from './crm-products.service';

describe('CrmProductsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrmProductsService = TestBed.get(CrmProductsService);
    expect(service).toBeTruthy();
  });
});
