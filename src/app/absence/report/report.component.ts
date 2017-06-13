import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {AbsenceService} from "../absence.service";

@Component({
  selector: 'absence-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  showExtra: Boolean = false;
  isSend: Boolean = false;

  absenceForm = new FormGroup({
    type: new FormControl(),
    reason: new FormControl(),
    report_from: new FormControl()
  })
  constructor(private  absenceService: AbsenceService) { }

  ngOnInit() {
  }

  typeChange(event: any) {
    this.absenceForm.patchValue({
      type: event.value
    })

    if(event.value === 'sick') {
      this.showExtra = false;
    } else {
      this.showExtra = true;
    }
  }

  save() {
    this.absenceService.setAbsence({
      type: this.absenceForm.value.type,
      reason: this.absenceForm.value.reason
    })
      .subscribe(data => {
        this.isSend = true;
      });
  }

}
