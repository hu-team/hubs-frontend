import { Component, OnInit } from '@angular/core';
import{ResultService} from '../result.service';
import {StudentService} from "../../student/student.service";
import{LessonService} from "../../lesson/lesson.service";
import{CourseService} from "../../course/course.service";
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
  model = 0;
  validate(value)  {
    value > 10.1 ? this.model = 1 : this.model = value;
  }
  private courses = [];
  gradeForm = new FormGroup({
    course: new FormControl(),
    grade: new FormControl()
  })
  constructor(private studentservice : StudentService, private resultservice : ResultService, private router: Router, private courseservice : CourseService , private route: ActivatedRoute) {
    // this.studentservice.getStudentById(this.id);
    this.student = {};
    this.courses = [];
    this.getCourses();
  }
  getStudent(){
    this.studentservice.getStudentById(this.id)
      .subscribe(data => {
        this.student = data;
        console.log(data);
      })
  }
  getCourses(){
    this.courseservice.getcourses()
      .subscribe((data) => {
        console.log(data);
        data.forEach((item) => {
          this.courses.push(item);
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
    this.resultservice.setGrade({
      course_id: this.gradeForm.value.course,
      number_grade: this.gradeForm.value.grade,
      student_id: this.id
    })
  .subscribe(data => {
      this.router.navigate(['/overview' ]);
    });
    console.log(this.gradeForm.value.course);
    console.log(this.gradeForm.value.grade);
    console.log(this.id);
  }
}
