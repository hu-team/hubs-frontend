import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../auth.service";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  showStudents: Boolean = false;
  isStudent: Boolean = false;

  constructor(private authService: AuthService) {
    console.log(this.authService.getUserRole());
    if(this.authService.getUserRole()  === 'counselor') {
      this.showStudents = true;
    } else if(this.authService.getUserRole()  === 'student') {
      this.isStudent = true;
    }
  }

  ngOnInit() {
  }

}
