import { TestBed } from "@angular/core/testing";

import { SellerSignupService } from "./seller-signup.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("SellerSignupService", () => {
  let service: SellerSignupService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(SellerSignupService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
