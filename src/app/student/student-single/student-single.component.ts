import { Component, OnInit } from '@angular/core';
import{StudentService} from '../student.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'student-single',
  templateUrl: './student-single.component.html',
  styleUrls: ['./student-single.component.scss']
})
export class StudentSingleComponent implements OnInit {
  id: number;
 private student : object;
 private results : object;
  private sub: any;
  columns = [
    { prop: 'curcode', name: "Cursus code" },
    { prop: 'curname', name: "Cursus naam" },
    { prop: 'start', name: "Begin tijd" },
    { prop: 'stop', name: "Eind tijd" },
    { prop: 'group', name: "Groep" },
    { prop: 'room', name: 'Lokaal'}
  ];
  constructor(private studentservice : StudentService, private router: Router, private route: ActivatedRoute) {
    this.student = {};
    this.getStudent();
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.getStudent();
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
    this.studentservice.getResultsFromStudent(this.id).subscribe(data => {
      this.results = data;
      console.log(data);
    });
  }
}
