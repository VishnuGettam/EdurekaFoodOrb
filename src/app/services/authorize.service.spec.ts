
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, getTestBed } from '@angular/core/testing';

import { AuthorizeService } from './authorize.service';

describe('AuthorizeService', () => {
  let injector : TestBed;
  let httpMock : HttpTestingController;
  let service: AuthorizeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthorizeService],

    });
    injector = getTestBed();
    service = injector.get(AuthorizeService);
    httpMock = injector.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });



});
