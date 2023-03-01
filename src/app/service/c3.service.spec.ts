import { TestBed } from '@angular/core/testing';

import { C3Service } from './c3.service';

describe('C3Service', () => {
  let service: C3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(C3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
