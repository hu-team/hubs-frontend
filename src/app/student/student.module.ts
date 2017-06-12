import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentOverviewComponent } from './student-overview/student-overview.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {TeachterModule} from '../teachter/teachter.module';

@NgModule({
  imports: [
    CommonModule,
    NgxDatatableModule,
    TeachterModule
  ],
  declarations: [StudentOverviewComponent],
  exports: [StudentOverviewComponent]
})
export class StudentModule { }
