import { Component, OnInit } from '@angular/core';
import { LessonService } from '../../lesson/lesson.service';
import { Router } from '@angular/router';
@Component({
  selector: 'course-overview',
  templateUrl: './course-overview.component.html',
  styleUrls: ['./course-overview.component.scss']
})
export class CourseOverviewComponent implements OnInit {
    rows = [
  ];
  columns = [
    { prop: 'curcode', name: "Cursus code" },
    { prop: 'curname', name: "Cursus naam" },
    { prop: 'start', name: "Begin tijd" },
    { prop: 'stop', name: "Eind tijd" },
    { prop: 'group', name: "Groep" }
  ];

  constructor(private ls: LessonService, private router: Router) {
    this.getLesson();
  }

  ngOnInit() {
  }

  getLesson() {
    this.ls.getLessons()
      .subscribe((data) => {
        data.forEach((item) => {
          this.rows.push(item);
        })
      });

  }

  gotoLesson(id) {
    this.router.navigate(['/lesson/' + id]);
  }

}
