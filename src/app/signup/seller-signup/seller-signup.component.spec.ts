import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerSignupComponent } from './seller-signup.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('SellerSignupComponent', () => {
  let component: SellerSignupComponent;
  let fixture: ComponentFixture<SellerSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SellerSignupComponent],
      imports:[HttpClientTestingModule,ReactiveFormsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SellerSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
