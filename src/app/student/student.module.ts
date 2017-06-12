import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationModule } from '../navigation/navigation.module';
import { StudentOverviewComponent } from './student-overview/student-overview.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { StudentSingleComponent } from './student-single/student-single.component';
import {StudentService} from "./student.service";

@NgModule({
  imports: [
    CommonModule,
    NavigationModule,
    NgxDatatableModule
  ],
  declarations: [StudentOverviewComponent, StudentSingleComponent],
  exports: [StudentOverviewComponent],
  providers: [StudentService]
})
export class StudentModule { }
