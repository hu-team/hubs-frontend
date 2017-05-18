import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseOverviewComponent } from './course-overview/course-overview.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    NgxDatatableModule
  ],
  declarations: [CourseOverviewComponent],
  exports: [
    CourseOverviewComponent
  ]
})
export class CourseModule { }
