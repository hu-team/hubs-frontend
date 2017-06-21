import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import {MdIconModule, MdSnackBarModule, MdTooltipModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MdIconModule,
    MdSnackBarModule,
    MdTooltipModule
  ],
  declarations: [NavbarComponent],
  exports: [
    NavbarComponent
  ]
})
export class NavigationModule { }
