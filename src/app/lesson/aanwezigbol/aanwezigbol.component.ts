import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'aanwezigbol',
  templateUrl: './aanwezigbol.component.html',
  styleUrls: ['./aanwezigbol.component.scss']
})
export class AanwezigbolComponent implements OnInit {
  @Input() lessons;
  constructor() { }

  ngOnInit() {
  }

  getColor(data) {
    console.log(data.presence);
    if(data.presence) {
      return "primary";
    } else if(!data.presence && !data.absence_type) {
      return "warn"
    } else if(!data.presence && data.absence_type) {
      return "accent"
    };
    console.log(data);
  }

  getDate(date, absence) {
    const newDate = new Date(date);
    let toString = newDate.getDay() + '-' + newDate.getMonth() + '-' + newDate.getFullYear();
    if(absence) {
      console.log(absence);
      switch (absence) {
        case 'sick':
          toString += " reden: Ziek";
          break;
        case 'family':
          toString += " reden: Familie";
          break;
        case 'other':
          toString += " reden: Anders";
          break;
      }
    }
    return toString;
  }

}
