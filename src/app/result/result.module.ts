import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultSingleComponent } from './result-single/result-single.component';
import { NavigationModule } from '../navigation/navigation.module';
import { StudentModule } from '../student/student.module';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {FormGroup, FormControl} from "@angular/forms";
import {
  MdInputModule, MdSelectModule, MdDatepickerModule, MdNativeDateModule, MdButtonModule,
  MdToolbarModule
}from '@angular/material';
import {ResultService} from "./result.service";
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NavigationModule,
    FormsModule,
    MdButtonModule,
    BrowserModule,
    MdSelectModule,
    MdInputModule
  ],
  declarations: [ResultSingleComponent],
  exports: [ResultSingleComponent],
  providers: [ResultService]
})
export class ResultModule { }
