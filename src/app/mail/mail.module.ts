import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MailComponent } from './mail/mail.component';
import {NavigationModule} from "../navigation/navigation.module";
import {MdInputModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    NavigationModule,
    MdInputModule
  ],
  declarations: [MailComponent]
})
export class MailModule { }
