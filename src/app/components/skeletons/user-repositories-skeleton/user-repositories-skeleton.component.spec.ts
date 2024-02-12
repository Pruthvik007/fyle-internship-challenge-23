import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRepositoriesSkeletonComponent } from './user-repositories-skeleton.component';

describe('UserRepositoriesSkeletonComponent', () => {
  let component: UserRepositoriesSkeletonComponent;
  let fixture: ComponentFixture<UserRepositoriesSkeletonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserRepositoriesSkeletonComponent]
    });
    fixture = TestBed.createComponent(UserRepositoriesSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
