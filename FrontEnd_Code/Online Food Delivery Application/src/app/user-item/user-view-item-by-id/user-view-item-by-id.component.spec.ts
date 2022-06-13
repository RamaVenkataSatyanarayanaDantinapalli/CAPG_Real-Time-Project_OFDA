import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewItemByIdComponent } from './user-view-item-by-id.component';

describe('UserViewItemByIdComponent', () => {
  let component: UserViewItemByIdComponent;
  let fixture: ComponentFixture<UserViewItemByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserViewItemByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserViewItemByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
