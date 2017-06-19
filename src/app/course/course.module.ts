import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseOverviewComponent } from './course-overview/course-overview.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { LessonModule } from '../lesson/lesson.module';
import {CourseService} from "./course.service";

@NgModule({
  imports: [
    CommonModule,
    NgxDatatableModule,
    LessonModule
  ],
  declarations: [CourseOverviewComponent],
  providers: [
    CourseService
],
  exports: [
    CourseOverviewComponent
  ]
})
export class CourseModule { }
