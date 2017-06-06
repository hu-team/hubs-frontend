import { Component, OnInit } from '@angular/core';
import {TeacherService} from "../../teachter/teacher.service";
import {AuthService} from "../../auth.service";

@Component({
  selector: 'student-overview',
  templateUrl: './student-overview.component.html',
  styleUrls: ['./student-overview.component.scss']
})
export class StudentOverviewComponent implements OnInit {
  rows = [
    { stnum: '16507939', stfirstname: 'John', stlastname: 'Doe', stclass: "V1A", stava: "69%" },
    { stnum: '16507939', stfirstname: 'John', stlastname: 'Doe', stclass: "V1A", stava: "69%" },
    { stnum: '16507939', stfirstname: 'John', stlastname: 'Doe', stclass: "V1A", stava: "69%" },
    { stnum: '16507939', stfirstname: 'John', stlastname: 'Doe', stclass: "V1A", stava: "69%" },
    { stnum: '16507939', stfirstname: 'John', stlastname: 'Doe', stclass: "V1A", stava: "69%" }
  ];
  columns = [
    { prop: 'stnum', name: "Studentennummer" },
    { prop: 'stfirstname', name: "Voornaam" },
    { prop: 'stlastname', name: "Achternaam" },
    { prop: 'stclass', name: "Klas" },
    { prop: 'stava', name: "Aanwezigheidspercentage" },
  ];

  constructor(private teachService: TeacherService, private auth: AuthService) {

  }

  ngOnInit() {
  }

  getStudents() {

    //this.teachService.getStudentCounselor();
  }
}
