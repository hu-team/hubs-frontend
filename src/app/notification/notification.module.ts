import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsComponent } from './notifications/notifications.component';
import {MdButtonModule, MdIconModule, MdListModule, MdSnackBarModule, MdTooltipModule} from '@angular/material';
import { MiniNotificationComponent } from './mini-notification/mini-notification.component';
import {NotificationService} from "./notification.service";
import { RouterModule } from '@angular/router';
import {NavigationModule} from "../navigation/navigation.module";

@NgModule({
  imports: [
    CommonModule,
    MdSnackBarModule,
    MdTooltipModule,
    RouterModule,
    NavigationModule,
    MdListModule,
    MdButtonModule
  ],
  declarations: [NotificationsComponent, MiniNotificationComponent],
  exports: [MiniNotificationComponent],
  providers: [NotificationService]
})
export class NotificationModule { }
