import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';
import { NavigationModule } from '../navigation/navigation.module';
import { CourseModule } from '../course/course.module';

@NgModule({
  imports: [
    CommonModule,
    NavigationModule,
    CourseModule
  ],
  declarations: [OverviewComponent]
})
export class OverviewModule { }
