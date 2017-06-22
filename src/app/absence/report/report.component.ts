import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AbsenceService} from "../absence.service";

@Component({
  selector: 'absence-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  showExtra: Boolean = false;
  isSend: Boolean = false;
  absenceForm: FormGroup;

  // absenceForm = new FormGroup({
  //   type: new FormControl(),
  //   reason: new FormControl(null, {
  //     Validators.required
  //   }),
  //   report_from: new FormControl(),
  //   report_time: new FormControl()
  // })
  constructor(private  absenceService: AbsenceService, private fb: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.absenceForm = this.fb.group({
      type: ['', [
        Validators.required
      ]],
      reason: ['',[
        Validators.required
      ]],
      report_from: [''],
      report_time: [''],
      server_from: ['']
    });
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
    if(this.absenceForm.valid) {
      console.log(this.absenceForm.value.server_from);
      this.absenceService.setAbsence({
        type: this.absenceForm.value.type,
        reason: this.absenceForm.value.reason,
        report_from: this.absenceForm.value.server_from
      })
        .subscribe(data => {
          this.isSend = true;
        });
    }
  }

  timeChange() {
    const time = this.absenceForm.value.report_time;
    const date = this.absenceForm.value.report_from;

    const dateTime = date + 'T' + time;

    if(time.length >= 5 && date.length >= 10) {
      const iso = new Date(dateTime);

      console.log(iso.toISOString())
      this.absenceForm.patchValue({
        server_from: iso.toISOString()
      });
    }

  }

}
