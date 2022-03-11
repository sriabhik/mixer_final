import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBillCustomerComponent } from './view-bill-customer.component';

describe('ViewBillCustomerComponent', () => {
  let component: ViewBillCustomerComponent;
  let fixture: ComponentFixture<ViewBillCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBillCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBillCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
