import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRestaurantByCityComponent } from './view-restaurant-by-city.component';

describe('ViewRestaurantByCityComponent', () => {
  let component: ViewRestaurantByCityComponent;
  let fixture: ComponentFixture<ViewRestaurantByCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRestaurantByCityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRestaurantByCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
