import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationModule } from '../navigation/navigation.module';
import { StudentOverviewComponent } from './student-overview/student-overview.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {TeachterModule} from '../teachter/teachter.module';
import { StudentSingleComponent } from './student-single/student-single.component';
import {StudentService} from "./student.service";
import {MdButtonModule} from '@angular/material';
import {MdChipsModule} from '@angular/material';
import {CourseModule} from "../course/course.module";

@NgModule({
  imports: [
    CommonModule,
    NgxDatatableModule,
    TeachterModule,
    NavigationModule,
    MdButtonModule,
    MdChipsModule,
    CourseModule

  ],
  declarations: [StudentOverviewComponent, StudentSingleComponent ],
  exports: [StudentOverviewComponent],
  providers: [StudentService]
})
export class StudentModule { }
