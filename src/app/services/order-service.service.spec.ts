import { OrderService } from './order-service.service';
import { TestBed } from '@angular/core/testing';



describe('OrderServiceService', () => {
  let service: OrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
