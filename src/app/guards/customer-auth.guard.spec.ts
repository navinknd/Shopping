import { TestBed } from "@angular/core/testing";
import { Router } from "@angular/router";

import { customerAuthGuard } from "./customer-auth.guard";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("customerAuthGuard", () => {
  let guard: customerAuthGuard;
  let router: Router;

  beforeEach(() => {
    const routerMockSpyObj = jasmine.createSpyObj("Router", ["navigate"]);
    TestBed.configureTestingModule({
      providers: [
        customerAuthGuard,
        { provide: Router, useValue: routerMockSpyObj },
      ],
      imports: [HttpClientTestingModule],
    });
    guard = TestBed.inject(customerAuthGuard);
    router = TestBed.inject(Router);
  });

  it("should be created", () => {
    expect(guard).toBeTruthy();
  });
});
