import {Component, Input, OnInit} from '@angular/core';
import {CourseService} from "../course.service";
import {AuthService} from "../../auth.service";

@Component({
  selector: 'course-statics',
  templateUrl: './course-statics.component.html',
  styleUrls: ['./course-statics.component.scss']
})
export class CourseStaticsComponent implements OnInit {
  @Input() id: any;

  public lineChartOptions:any = {
    responsive: true
  };

  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';


  private graph = {
    labels: [],
    set: {},
    show: false
  }

  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // red
      backgroundColor: 'rgba(240, 0, 24, 0.2)',
      borderColor: 'rgba(240, 0, 24, 1)',
      pointBackgroundColor: 'rgba(240, 0, 24, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(240, 0, 24, 0.8)'
    }]

  constructor(private courseService: CourseService, private authService: AuthService) {

  }

  ngOnInit() {
    this.courseService.getcourseStaticsByStudentId(this.id)
      .subscribe(data => {
        this.graph = data;
      });
  }

}
