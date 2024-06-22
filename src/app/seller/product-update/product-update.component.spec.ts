import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ProductUpdateComponent } from "./product-update.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { of } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

describe("ProductUpdateComponent", () => {
  let component: ProductUpdateComponent;
  let fixture: ComponentFixture<ProductUpdateComponent>;

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
      declarations: [ProductUpdateComponent],
      imports: [HttpClientTestingModule,ReactiveFormsModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: activatedRouteMock,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
