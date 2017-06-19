import { Component, OnInit } from '@angular/core';
import {TeacherService} from "../../teachter/teacher.service";
import {AuthService} from "../../auth.service";
import{StudentService} from '../student.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'student-overview',
  templateUrl: './student-overview.component.html',
  styleUrls: ['./student-overview.component.scss']
})
export class StudentOverviewComponent implements OnInit {
  private students = [];
  private studentList: object;
  private sub : any;
  private id : any;
  private resultList : object;
  // rows = [
  //   { stnum: '16507939', stfirstname: 'John', stlastname: 'Doe', stclass: "V1A", stava: "69%" },
  //   { stnum: '16507939', stfirstname: 'John', stlastname: 'Doe', stclass: "V1A", stava: "69%" },
  //   { stnum: '16507939', stfirstname: 'John', stlastname: 'Doe', stclass: "V1A", stava: "69%" },
  //   { stnum: '16507939', stfirstname: 'John', stlastname: 'Doe', stclass: "V1A", stava: "69%" },
  //   { stnum: '16507939', stfirstname: 'John', stlastname: 'Doe', stclass: "V1A", stava: "69%" }
  // ];
  columns = [
    { prop: 'student_number', name: "Studentennummer" },
    { prop: 'first_name', name: "Voornaam" },
    { prop: 'last_name', name: "Achternaam" },
    { prop: 'email', name: "Email"},
  ];

  constructor(private teachService: TeacherService, private auth: AuthService, private studentservice : StudentService, private router: Router,  private route: ActivatedRoute) {
  this.students = [];
  // this.getStudents();

  }
  gotostudent(id){
    this.router.navigate(['/student/' + id ]);
  }
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = this.auth.getUser()["id"];
      this.getStudentsFromCouncelor();
    });
  }

  getStudentsFromCouncelor() {
    console.log("test124")
    this.studentservice.getStudentsFromCouncelor(this.id)
      .subscribe((data) => {
        console.log(data);
        this.resultList = data;
        // this.studentList = this.students;
      });
  }

}
