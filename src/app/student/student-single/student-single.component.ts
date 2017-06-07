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
  private sub: any;
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
}
