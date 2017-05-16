import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {MdCardModule} from '@angular/material';
import {MdInputModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdCardModule
  ],
  declarations: [LoginComponent],
  exports: [
    LoginComponent
  ]
})
export class LoginModule {

 }
