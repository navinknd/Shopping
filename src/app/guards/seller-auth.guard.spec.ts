import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { BehaviorSubject, isObservable, of } from "rxjs";
import { sellerAuthGuard } from "./seller-auth.guard";
import { SellerSignupService } from "../services/seller-signup.service";

describe("sellerAuthGuard", () => {
  let guard: sellerAuthGuard;
  let sellerSignupService: jasmine.SpyObj<SellerSignupService>;

  beforeEach(() => {
    const sellerSignupServiceSpy = jasmine.createSpyObj(
      "SellerSignupService",
      [],
      {
        isSellerLoggedIn: new BehaviorSubject<boolean>(false),
      }
    );

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        sellerAuthGuard,
        { provide: SellerSignupService, useValue: sellerSignupServiceSpy },
      ],
    });

    guard = TestBed.inject(sellerAuthGuard);
    sellerSignupService = TestBed.inject(
      SellerSignupService
    ) as jasmine.SpyObj<SellerSignupService>;
  });

  it("should be created", () => {
    expect(guard).toBeTruthy();
  });
});
