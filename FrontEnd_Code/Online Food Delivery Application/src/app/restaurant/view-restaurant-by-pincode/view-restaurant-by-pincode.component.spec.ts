import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRestaurantByPincodeComponent } from './view-restaurant-by-pincode.component';

describe('ViewRestaurantByPincodeComponent', () => {
  let component: ViewRestaurantByPincodeComponent;
  let fixture: ComponentFixture<ViewRestaurantByPincodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRestaurantByPincodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRestaurantByPincodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
