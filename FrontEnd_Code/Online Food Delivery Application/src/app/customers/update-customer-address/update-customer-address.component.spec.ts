import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCustomerAddressComponent } from './update-customer-address.component';

describe('UpdateCustomerAddressComponent', () => {
  let component: UpdateCustomerAddressComponent;
  let fixture: ComponentFixture<UpdateCustomerAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCustomerAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCustomerAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
