import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';
import { NavigationModule } from '../navigation/navigation.module';

@NgModule({
  imports: [
    CommonModule,
    NavigationModule
  ],
  declarations: [OverviewComponent]
})
export class OverviewModule { }
