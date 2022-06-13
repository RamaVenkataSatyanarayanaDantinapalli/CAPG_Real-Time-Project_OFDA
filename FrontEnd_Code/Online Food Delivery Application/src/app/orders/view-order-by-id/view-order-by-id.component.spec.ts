import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOrderByIdComponent } from './view-order-by-id.component';

describe('ViewOrderByIdComponent', () => {
  let component: ViewOrderByIdComponent;
  let fixture: ComponentFixture<ViewOrderByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOrderByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOrderByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
