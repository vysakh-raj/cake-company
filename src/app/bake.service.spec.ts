import { TestBed } from '@angular/core/testing';

import { BakeService } from './bake.service';

describe('BakeService', () => {
  let service: BakeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BakeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
