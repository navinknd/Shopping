import { TestBed } from '@angular/core/testing';

import { CustomerSignupService } from './customer-signup.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CustomerSignupService', () => {
  let service: CustomerSignupService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(CustomerSignupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
