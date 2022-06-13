import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRestaurantByItemComponent } from './view-restaurant-by-item.component';

describe('ViewRestaurantByItemComponent', () => {
  let component: ViewRestaurantByItemComponent;
  let fixture: ComponentFixture<ViewRestaurantByItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRestaurantByItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRestaurantByItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
