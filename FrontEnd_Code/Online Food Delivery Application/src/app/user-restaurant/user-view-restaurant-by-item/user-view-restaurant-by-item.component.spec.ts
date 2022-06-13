import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewRestaurantByItemComponent } from './user-view-restaurant-by-item.component';

describe('UserViewRestaurantByItemComponent', () => {
  let component: UserViewRestaurantByItemComponent;
  let fixture: ComponentFixture<UserViewRestaurantByItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserViewRestaurantByItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserViewRestaurantByItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
