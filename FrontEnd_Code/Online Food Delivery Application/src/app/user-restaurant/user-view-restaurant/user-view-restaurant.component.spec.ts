import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewRestaurantComponent } from './user-view-restaurant.component';

describe('UserViewRestaurantComponent', () => {
  let component: UserViewRestaurantComponent;
  let fixture: ComponentFixture<UserViewRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserViewRestaurantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserViewRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
