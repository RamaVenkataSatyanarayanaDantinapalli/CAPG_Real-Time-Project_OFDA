import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRestaurantAddressComponent } from './add-restaurant-address.component';

describe('AddRestaurantAddressComponent', () => {
  let component: AddRestaurantAddressComponent;
  let fixture: ComponentFixture<AddRestaurantAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRestaurantAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRestaurantAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
