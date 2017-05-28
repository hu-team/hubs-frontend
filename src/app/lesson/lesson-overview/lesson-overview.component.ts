import { Component, OnInit, OnDestroy } from '@angular/core';
import {LessonService} from '../lesson.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'lesson-overview',
  templateUrl: './lesson-overview.component.html',
  styleUrls: ['./lesson-overview.component.scss']
})
export class LessonOverviewComponent implements OnInit {
  id: number;
  private sub: any;
  group: string;
  students: any;

  constructor(private ls: LessonService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.getLesson();
      // In a real app: dispatch action to load the details here.
    });
  }

  getLesson() {
    this.ls.getLessonById(this.id)
      .subscribe(data => {
        this.group = data[0].group;
        this.students = data[0].students;

        console.log(data);
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
