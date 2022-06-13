import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewItemComponent } from './user-view-item.component';

describe('UserViewItemComponent', () => {
  let component: UserViewItemComponent;
  let fixture: ComponentFixture<UserViewItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserViewItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserViewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
