import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewItemByNameComponent } from './user-view-item-by-name.component';

describe('UserViewItemByNameComponent', () => {
  let component: UserViewItemByNameComponent;
  let fixture: ComponentFixture<UserViewItemByNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserViewItemByNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserViewItemByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
