import { Component, OnInit } from '@angular/core';
import{StudentService} from '../student.service';
import { Router, ActivatedRoute } from '@angular/router';
import {MdSelectModule} from '@angular/material';

@Component({
  selector: 'student-single',
  templateUrl: './student-single.component.html',
  styleUrls: ['./student-single.component.scss']
})
export class StudentSingleComponent implements OnInit {
  id: number;
  status : any;
 private student : object;
 private resultList : object;
 private isPassed : any;
 private test : boolean;
  private sub: any;
  columns = [
    { prop: 'course.name', name: "Cursus naam" },
    // { prop: 'year', name: "School jaar" },
    { prop: 'course.code', name: 'Cursuscode'},
    { prop: 'course.period', name: 'Periode'},
    { prop: 'course.ec_points', name: "EC behaald" },

    { prop: 'number_grade', name: "Cijfer" },
    { prop: 'ladder_grade', name: 'Gehaald'},

    // { prop: 'created', name: "Datum van Toevoeging"}
  ];
  constructor(private studentservice : StudentService, private router: Router, private route: ActivatedRoute) {
    this.test = false;
    this.student = {};
    this.getStudent();
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.getStudent();
      this.getResults();
    });
  }
  getStudent(){
    this.studentservice.getStudentById(this.id)
      .subscribe(data => {
        this.student = data;
        console.log(data);
      })
  }
  getResults(){
this.studentservice.getResultsFromStudent(this.id)
  .subscribe(data =>
    { this.resultList=data.results;
    console.log(data.results);}
  )}
  isStudentPassed(studentId) {
    let bool = false;

    // this.presenceList.forEach(present => {
    //   if(present.student === studentId) {
    //     bool = present.present;
    //     this.presenceId = present.id;
    //   }
    // });

    return bool;
  }
  insertStudentGrade(){
    this.router.navigate(['/result/'+this.id ]);
  }
}

