import { TestBed, inject } from '@angular/core/testing';

import { TeacherService } from './teacher.service';

describe('TeacherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeacherService]
    });
  });

  it('should ...', inject([TeacherService], (service: TeacherService) => {
    expect(service).toBeTruthy();
  }));
});
