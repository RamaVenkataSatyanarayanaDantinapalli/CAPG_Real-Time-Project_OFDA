import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewRestaurantByCityComponent } from './user-view-restaurant-by-city.component';

describe('UserViewRestaurantByCityComponent', () => {
  let component: UserViewRestaurantByCityComponent;
  let fixture: ComponentFixture<UserViewRestaurantByCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserViewRestaurantByCityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserViewRestaurantByCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
