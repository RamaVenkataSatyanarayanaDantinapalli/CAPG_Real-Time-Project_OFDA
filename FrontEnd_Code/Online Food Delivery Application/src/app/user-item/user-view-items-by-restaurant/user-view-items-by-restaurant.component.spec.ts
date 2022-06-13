import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewItemsByRestaurantComponent } from './user-view-items-by-restaurant.component';

describe('UserViewItemsByRestaurantComponent', () => {
  let component: UserViewItemsByRestaurantComponent;
  let fixture: ComponentFixture<UserViewItemsByRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserViewItemsByRestaurantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserViewItemsByRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
