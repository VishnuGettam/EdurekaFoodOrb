import { TestBed } from '@angular/core/testing';

import { UsetItemServiceService } from './uset-item-service.service';

describe('UsetItemServiceService', () => {
  let service: UsetItemServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsetItemServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
