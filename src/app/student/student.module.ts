import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentOverviewComponent } from './student-overview/student-overview.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    NgxDatatableModule
  ],
  declarations: [StudentOverviewComponent],
  exports: [StudentOverviewComponent]
})
export class StudentModule { }
