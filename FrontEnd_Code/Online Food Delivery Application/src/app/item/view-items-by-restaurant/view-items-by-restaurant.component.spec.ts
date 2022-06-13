import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewItemsByRestaurantComponent } from './view-items-by-restaurant.component';

describe('ViewItemsByRestaurantComponent', () => {
  let component: ViewItemsByRestaurantComponent;
  let fixture: ComponentFixture<ViewItemsByRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewItemsByRestaurantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewItemsByRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
