import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseStaticsComponent } from './course-statics.component';

describe('CourseStaticsComponent', () => {
  let component: CourseStaticsComponent;
  let fixture: ComponentFixture<CourseStaticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseStaticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseStaticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
