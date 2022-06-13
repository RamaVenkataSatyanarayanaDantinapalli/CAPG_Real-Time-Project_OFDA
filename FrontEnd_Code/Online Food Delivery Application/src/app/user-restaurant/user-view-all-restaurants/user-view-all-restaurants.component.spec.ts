import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewAllRestaurantsComponent } from './user-view-all-restaurants.component';

describe('UserViewAllRestaurantsComponent', () => {
  let component: UserViewAllRestaurantsComponent;
  let fixture: ComponentFixture<UserViewAllRestaurantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserViewAllRestaurantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserViewAllRestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
