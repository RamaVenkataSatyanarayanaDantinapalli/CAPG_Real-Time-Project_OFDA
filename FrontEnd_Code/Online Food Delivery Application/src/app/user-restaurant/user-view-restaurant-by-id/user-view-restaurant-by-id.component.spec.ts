import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewRestaurantByIdComponent } from './user-view-restaurant-by-id.component';

describe('UserViewRestaurantByIdComponent', () => {
  let component: UserViewRestaurantByIdComponent;
  let fixture: ComponentFixture<UserViewRestaurantByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserViewRestaurantByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserViewRestaurantByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
