import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewRestaurantItemsComponent } from './user-view-restaurant-items.component';

describe('UserViewRestaurantItemsComponent', () => {
  let component: UserViewRestaurantItemsComponent;
  let fixture: ComponentFixture<UserViewRestaurantItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserViewRestaurantItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserViewRestaurantItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
