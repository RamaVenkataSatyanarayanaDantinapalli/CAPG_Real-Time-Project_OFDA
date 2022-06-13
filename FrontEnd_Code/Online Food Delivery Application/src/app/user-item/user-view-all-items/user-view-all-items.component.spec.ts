import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewAllItemsComponent } from './user-view-all-items.component';

describe('UserViewAllItemsComponent', () => {
  let component: UserViewAllItemsComponent;
  let fixture: ComponentFixture<UserViewAllItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserViewAllItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserViewAllItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
