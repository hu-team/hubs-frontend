import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportComponent } from './report/report.component';
import {AbsenceService} from './absence.service'
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {
  MdInputModule, MdSelectModule, MdDatepickerModule, MdNativeDateModule, MdButtonModule,
  MdToolbarModule
} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MdInputModule,
    MdSelectModule,
    MdDatepickerModule,
    MdNativeDateModule,
    FormsModule,
    MdButtonModule,
    MdToolbarModule
  ],
  declarations: [ReportComponent],
  exports: [ReportComponent],
  providers: [AbsenceService]
})
export class AbsenceModule { }
