import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course-overview',
  templateUrl: './course-overview.component.html',
  styleUrls: ['./course-overview.component.scss']
})
export class CourseOverviewComponent implements OnInit {
    rows = [
    { curcode: 'TCIF-V3TFED-16', curname: 'Themaopdracht Frontend Development', curtype: 'Themaopdracht', start: "10:00", end: "12:00", room: "DL-4.88" },
    { curcode: 'TCIF-V3TFED-16', curname: 'Themaopdracht Frontend Development', curtype: 'Themaopdracht', start: "10:00", end: "12:00", room: "DL-4.88" },
    { curcode: 'TCIF-V3TFED-16', curname: 'Themaopdracht Frontend Development', curtype: 'Themaopdracht', start: "10:00", end: "12:00", room: "DL-4.88" },
    { curcode: 'TCIF-V3TFED-16', curname: 'Themaopdracht Frontend Development', curtype: 'Themaopdracht', start: "10:00", end: "12:00", room: "DL-4.88" },
    { curcode: 'TCIF-V3TFED-16', curname: 'Themaopdracht Frontend Development', curtype: 'Themaopdracht', start: "10:00", end: "12:00", room: "DL-4.88" }
  ];
  columns = [
    { prop: 'curcode', name: "Cursus code" },
    { prop: 'curname', name: "Cursus naam" },
    { prop: 'curtype', name: "Cursus type" },
    { prop: 'start', name: "Begin tijd" },
    { prop: 'end', name: "Eind tijd" },
    { prop: 'room', name: "Lokaal" }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
