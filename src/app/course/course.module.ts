import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseOverviewComponent } from './course-overview/course-overview.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { LessonModule } from '../lesson/lesson.module';
import {CourseService} from "./course.service";
import { CourseStaticsComponent } from './course-statics/course-statics.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    NgxDatatableModule,
    LessonModule,
    ChartsModule
  ],
  declarations: [CourseOverviewComponent, CourseStaticsComponent],
  providers: [
    CourseService
],
  exports: [
    CourseOverviewComponent,
    CourseStaticsComponent
  ]
})
export class CourseModule { }
