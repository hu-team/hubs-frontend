import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSingleComponent } from './student-single.component';

describe('StudentSingleComponent', () => {
  let component: StudentSingleComponent;
  let fixture: ComponentFixture<StudentSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
