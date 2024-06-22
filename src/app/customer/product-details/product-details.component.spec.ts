import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ProductDetailsComponent } from "./product-details.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ActivatedRoute } from "@angular/router";
import { of } from "rxjs";

describe("ProductDetailsComponent", () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;

  beforeEach(async () => {
    const activatedRouteMock = {
      params: of({ id: "123" }),
      snapshot: {
        paramMap: {
          get: (key: string) => "123",
        },
      },
    };
    await TestBed.configureTestingModule({
      declarations: [ProductDetailsComponent],
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: activatedRouteMock,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
