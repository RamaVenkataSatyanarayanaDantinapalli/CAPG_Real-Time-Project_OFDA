import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewItemsByCategoryComponent } from './view-items-by-category.component';

describe('ViewItemsByCategoryComponent', () => {
  let component: ViewItemsByCategoryComponent;
  let fixture: ComponentFixture<ViewItemsByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewItemsByCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewItemsByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
