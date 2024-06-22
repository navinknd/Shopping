import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { HeadersComponent } from "./headers/headers.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("AppComponent", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule,HttpClientTestingModule],
      declarations: [AppComponent, HeadersComponent],
    }).compileComponents();
  });

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
