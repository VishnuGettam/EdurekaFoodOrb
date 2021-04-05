import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';




const dummyPosts: any[] =
 [{
        "id": 1,
        "name": "Vishnu",
        "email": "vishnu@gmail.com",
        "password": "test",
        "email_verified_at": null,
        "created_at": "2020-04-26T17:02:45.000000Z",
        "updated_at": "2020-04-27T15:05:19.000000Z",
        "api_token": null
    },
    {
        "id": 2,
        "name": "Divya",
        "email": "divya@gmail.com",
        "password": "test",
        "email_verified_at": null,
        "created_at": "2020-04-26T17:02:45.000000Z",
        "updated_at": "2020-04-27T15:05:19.000000Z",
        "api_token": null
    },
    {
        "id": 3,
        "name": "Vihaan",
        "email": "vihaangettam@gmail.com",
        "password": "test",
        "email_verified_at": null,
        "created_at": "2020-04-26T17:02:45.000000Z",
        "updated_at": "2020-04-27T15:05:19.000000Z",
        "api_token": null
    }

  ];

describe('UserService', () => {

  let service: UserService;
  let httpMock : HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService],
    });
      service = TestBed.get(UserService);
      httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Get Users from Users API', () => {
  service.getUsers().subscribe(posts => {
        expect(posts.length).toBe(3);
        expect(posts).toEqual(dummyPosts);
    });
    const request = httpMock.expectOne( 'http://localhost:3000/users');
    expect(request.request.method).toBe('GET');
    request.flush(dummyPosts);
    });
});
