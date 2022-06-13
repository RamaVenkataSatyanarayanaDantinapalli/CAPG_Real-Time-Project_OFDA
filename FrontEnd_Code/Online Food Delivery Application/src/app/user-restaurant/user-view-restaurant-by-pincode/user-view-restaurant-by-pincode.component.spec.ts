import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewRestaurantByPincodeComponent } from './user-view-restaurant-by-pincode.component';

describe('UserViewRestaurantByPincodeComponent', () => {
  let component: UserViewRestaurantByPincodeComponent;
  let fixture: ComponentFixture<UserViewRestaurantByPincodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserViewRestaurantByPincodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserViewRestaurantByPincodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
