import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewItemByIdComponent } from './view-item-by-id.component';

describe('ViewItemByIdComponent', () => {
  let component: ViewItemByIdComponent;
  let fixture: ComponentFixture<ViewItemByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewItemByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewItemByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
