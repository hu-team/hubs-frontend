import { Component, OnInit } from '@angular/core';
import{ResultService} from '../result.service';
import {StudentService} from "../../student/student.service";
import{LessonService} from "../../lesson/lesson.service";
import { Router, ActivatedRoute } from '@angular/router';

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
  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  private lessons = [];
  constructor(private studentservice : StudentService, private router: Router, private lessonservice : LessonService , private route: ActivatedRoute) {
    this.studentservice.getStudentById(this.id);
    this.student = {};
    this.lessons = [];
    this.getLessons();
    this.getStudent();
  }

  getStudent(){
    this.studentservice.getStudentById(this.id)
      .subscribe(data => {
        this.student = data;
        console.log(data);
      })
  }
  getLessons(){
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
