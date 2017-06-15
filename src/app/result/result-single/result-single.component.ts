import { Component, OnInit } from '@angular/core';
import{ResultService} from '../result.service';
import {StudentService} from "../../student/student.service";
import{LessonService} from "../../lesson/lesson.service";
import { Router, ActivatedRoute } from '@angular/router';
import {ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import {
  MdInputModule, MdSelectModule, MdDatepickerModule, MdNativeDateModule, MdButtonModule, MdToolbarModule
}from '@angular/material';
@Component({
  selector: 'app-result-single',
  templateUrl: './result-single.component.html',
  styleUrls: ['./result-single.component.scss']
})
export class ResultSingleComponent implements OnInit {
  id: number;
  selectedValue: object;
  private student : object;
  private grade = '';
  private cursuscode = '';

  private sub: any;

  private lessons = [];
  gradeForm = new FormGroup({
    lesson: new FormControl(),
    grade: new FormControl(),
    student: new FormControl()
  })
  constructor(private studentservice : StudentService, private router: Router, private lessonservice : LessonService , private route: ActivatedRoute) {
    // this.studentservice.getStudentById(this.id);
    this.student = {};
    this.lessons = [];
    this.getLesson();
    this.getStudent();

  }
  getStudent(){
    this.studentservice.getStudentById(this.id)
      .subscribe(data => {
        this.student = data;
        console.log(data);
      })
  }
  getLesson(){
    this.lessonservice.getLessons()
      .subscribe((data) => {
        data.forEach((item) => {
          this.lessons.push(item);
        })
      });
  }
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.getStudent();
    });
  }
  insertResult(){
    // const student_id = f.value.id;
    // const password = f.value.grade;
    this.router.navigate(['/overview']);
  }
}
