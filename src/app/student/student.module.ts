import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationModule } from '../navigation/navigation.module';
import { StudentOverviewComponent } from './student-overview/student-overview.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {TeachterModule} from '../teachter/teachter.module';
import { StudentSingleComponent } from './student-single/student-single.component';
import {StudentService} from "./student.service";

@NgModule({
  imports: [
    CommonModule,
    NgxDatatableModule,
    TeachterModule,
    NavigationModule,
  ],
  declarations: [StudentOverviewComponent, StudentSingleComponent],
  exports: [StudentOverviewComponent],
  providers: [StudentService]
})
export class StudentModule { }
