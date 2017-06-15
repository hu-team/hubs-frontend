import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultSingleComponent } from './result-single/result-single.component';
import { NavigationModule } from '../navigation/navigation.module';
import { StudentModule } from '../student/student.module';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {
  MdInputModule, MdSelectModule, MdDatepickerModule, MdNativeDateModule, MdButtonModule,
  MdToolbarModule
}from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    NavigationModule,
    FormsModule,
    BrowserModule,
    MdSelectModule
  ],
  declarations: [ResultSingleComponent]
})
export class ResultModule { }
