import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationModule } from '../navigation/navigation.module';
import {LessonService} from './lesson.service';
import { LessonOverviewComponent } from './lesson-overview/lesson-overview.component';
import {MdButtonModule} from '@angular/material';
import { PresenceModule } from '../presence/presence.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {MdToolbarModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    NavigationModule,
    MdButtonModule,
    PresenceModule,
    NgxDatatableModule,
    MdToolbarModule
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
