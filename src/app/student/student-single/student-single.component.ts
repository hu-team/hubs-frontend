import { Component, OnInit } from '@angular/core';
import{StudentService} from '../student.service';
import { Router, ActivatedRoute } from '@angular/router';
import {AuthService} from "../../auth.service";

@Component({
  selector: 'student-single',
  templateUrl: './student-single.component.html',
  styleUrls: ['./student-single.component.scss']
})
export class StudentSingleComponent implements OnInit {
  id: number;
  user_role: string;
  status : any;
 private student : object;
 private counselor : object;
 private resultList : object;
 private passed : string;
 private test : boolean;
 private color: string;

  availableColors = [
    { name: 'none', color: '' },
    { name: 'Primary', color: 'primary' },
    { name: 'Accent', color: 'accent' },
    { name: 'Warn', color: 'warn' }
  ];
  private sub: any;
  columns = [
    { prop: 'course.name', name: "Cursus naam" },
    { prop: 'course.code', name: 'Cursuscode'},
    { prop: 'course.period', name: 'Periode'},
    { prop: 'course.ec_points', name: "EC te behalen" },

    { prop: 'number_grade', name: "Cijfer" },
  ];
  constructor(private studentservice : StudentService, private router: Router,private auth: AuthService, private route: ActivatedRoute) {
    this.test = false;
    this.student = {};
    this.counselor = {};
    this.passed = "";
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.getStudent();
      this.getResults();
      this.user_role = this.auth.getUser()["user_type"];
    });
  }
  getStudent(){
    this.studentservice.getStudentById(this.id)
      .subscribe(data => {
        this.student = data;
        this.counselor = data.counselor;
        console.log(this.counselor);
        console.log(data);
      })
  }
  mailversturen(){
    this.router.navigate(['/mail/'+this.id ]);
  }

  isCounselor(){
    if(this.user_role == "counselor"){
      return false;
    }
    else {
      return true;
    }
  }
  getResults(){
this.studentservice.getResultsFromStudent(this.id)
  .subscribe(data =>
    { this.resultList=data.results;
    console.log(data.results);}
  )}
  getLadderGrade(id){
    if(id == 1){
      this.passed = "Gezakt";
    }
    else if(id == 2){
      this.passed = "Gehaald";
    }
    else{
      this.passed = "Niet Aanwezig (NA)";
    }
    return this.passed;
  }
  getColor(id){
    if(id == 1){
      this.color = "warn";
    }
    else if(id == 2){
      this.color = "primary";
    }
    else{
      this.color = "accent";
    }
    return this.color;
  }
  insertStudentGrade(){
    this.router.navigate(['/result/'+this.id ]);
  }
}

