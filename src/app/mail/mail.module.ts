import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MailComponent } from './mail/mail.component';
import {NavigationModule} from "../navigation/navigation.module";
import {MdInputModule} from "@angular/material";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    NavigationModule,
    MdInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [MailComponent]
})
export class MailModule { }
