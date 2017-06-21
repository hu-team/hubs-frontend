import { Component, OnInit } from '@angular/core';
import {MdIconRegistry} from "@angular/material";
import {DomSanitizer} from "@angular/platform-browser";
import {NotificationService} from "../notification.service";

@Component({
  selector: 'mini-notification',
  templateUrl: './mini-notification.component.html',
  styleUrls: ['./mini-notification.component.scss']
})
export class MiniNotificationComponent implements OnInit {
  private active: Boolean = false;
  private tooltipmsg = "";
  private tooltipPosition = 'below';
  constructor(iconRegistry: MdIconRegistry, sanitizer: DomSanitizer, private notService: NotificationService) {
    iconRegistry.addSvgIcon(
      'notifications',
      sanitizer.bypassSecurityTrustResourceUrl('assets/ico/notifications.svg'));

    iconRegistry.addSvgIcon(
      'notifications-active',
      sanitizer.bypassSecurityTrustResourceUrl('assets/ico/notifications_active.svg'));

    this.getNotification();
  }

  getNotification() {
    this.notService.getMininotification()
      .subscribe(data => {
        if(data.notRead > 0) {
          this.active = true;
          this.tooltipmsg = 'Er staan ' + data.notRead + ' notificaties klaar';
        }
      });
  }

  ngOnInit() {
  }

}
