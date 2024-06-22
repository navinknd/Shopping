import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSignupComponent } from './customer-signup.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('CustomerSignupComponent', () => {
  let component: CustomerSignupComponent;
  let fixture: ComponentFixture<CustomerSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerSignupComponent],
      imports:[HttpClientTestingModule,ReactiveFormsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomerSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
