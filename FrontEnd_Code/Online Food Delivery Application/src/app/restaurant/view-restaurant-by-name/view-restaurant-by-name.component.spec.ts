import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRestaurantByNameComponent } from './view-restaurant-by-name.component';

describe('ViewRestaurantByNameComponent', () => {
  let component: ViewRestaurantByNameComponent;
  let fixture: ComponentFixture<ViewRestaurantByNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRestaurantByNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRestaurantByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
