import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationModule } from '../navigation/navigation.module';
import {LessonService} from './lesson.service';
import { LessonOverviewComponent } from './lesson-overview/lesson-overview.component';

@NgModule({
  imports: [
    CommonModule,
    NavigationModule
  ],
  declarations: [LessonOverviewComponent],
  providers: [
    LessonService
  ],
  exports: [
    LessonOverviewComponent
  ]
})
export class LessonModule { }
