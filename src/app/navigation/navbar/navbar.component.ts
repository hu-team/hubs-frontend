import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../auth.service';
import {DomSanitizer} from "@angular/platform-browser";
import {NotificationService} from "../../notification/notification.service";
import {MdIconRegistry} from "@angular/material";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private active: Boolean = false;
  private tooltipmsg = "";
  private tooltipPosition = 'below';

  constructor(private authservice: AuthService, sanitizer: DomSanitizer, iconRegistry: MdIconRegistry, private notService: NotificationService) {
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

  logout(){
    this.authservice.logout();
  }
}
