import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewItemByCategoryComponent } from './user-view-item-by-category.component';

describe('UserViewItemByCategoryComponent', () => {
  let component: UserViewItemByCategoryComponent;
  let fixture: ComponentFixture<UserViewItemByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserViewItemByCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserViewItemByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
