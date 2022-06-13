import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRestaurantAddressComponent } from './update-restaurant-address.component';

describe('UpdateRestaurantAddressComponent', () => {
  let component: UpdateRestaurantAddressComponent;
  let fixture: ComponentFixture<UpdateRestaurantAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRestaurantAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRestaurantAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
