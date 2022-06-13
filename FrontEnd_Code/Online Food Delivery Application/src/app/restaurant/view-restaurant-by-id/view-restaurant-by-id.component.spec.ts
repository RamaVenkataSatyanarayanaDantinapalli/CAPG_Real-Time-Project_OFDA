import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRestaurantByIdComponent } from './view-restaurant-by-id.component';

describe('ViewRestaurantByIdComponent', () => {
  let component: ViewRestaurantByIdComponent;
  let fixture: ComponentFixture<ViewRestaurantByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRestaurantByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRestaurantByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
