import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadersComponent } from './headers.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HeadersComponent', () => {
  let component: HeadersComponent;
  let fixture: ComponentFixture<HeadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeadersComponent],
      imports:[HttpClientTestingModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
