import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewRestaurantByNameComponent } from './user-view-restaurant-by-name.component';

describe('UserViewRestaurantByNameComponent', () => {
  let component: UserViewRestaurantByNameComponent;
  let fixture: ComponentFixture<UserViewRestaurantByNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserViewRestaurantByNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserViewRestaurantByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
