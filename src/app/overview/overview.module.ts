import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';
import { NavigationModule } from '../navigation/navigation.module';
import { CourseModule } from '../course/course.module';
import { StudentModule } from '../student/student.module';
import {AbsenceModule} from '../absence/absence.module';

@NgModule({
  imports: [
    CommonModule,
    NavigationModule,
    CourseModule,
    StudentModule,
    AbsenceModule,
  ],
  declarations: [OverviewComponent]
})
export class OverviewModule { }
