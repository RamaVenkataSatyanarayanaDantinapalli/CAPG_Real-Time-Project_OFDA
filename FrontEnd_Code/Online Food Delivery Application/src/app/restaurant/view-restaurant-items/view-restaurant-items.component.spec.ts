import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRestaurantItemsComponent } from './view-restaurant-items.component';

describe('ViewRestaurantItemsComponent', () => {
  let component: ViewRestaurantItemsComponent;
  let fixture: ComponentFixture<ViewRestaurantItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRestaurantItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRestaurantItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
