import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewItemsByNameComponent } from './view-items-by-name.component';

describe('ViewItemsByNameComponent', () => {
  let component: ViewItemsByNameComponent;
  let fixture: ComponentFixture<ViewItemsByNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewItemsByNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewItemsByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
