import { Component, OnInit } from '@angular/core';
import {MdIconRegistry, MdSnackBar} from "@angular/material";
import {NotificationService} from "../notification.service";
import {Router} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  private listItem: Array<any> = [];
  private notItems: Boolean = false;
  constructor(public snackBar: MdSnackBar, private notService: NotificationService, private router: Router, sanitizer: DomSanitizer, iconRegistry: MdIconRegistry) {
    iconRegistry.addSvgIcon(
      'prio',
      sanitizer.bypassSecurityTrustResourceUrl('assets/ico/prio.svg'));

    this.getNotification();
  }

  getNotification() {
    this.notService.getNotification()
      .subscribe(data => {
        this.listItem = data;
        this.checkList();
      });
  }

  gotoStudent(id) {
    this.router.navigate(['/student/' + id ]);
  }

  markAsRead(id, index) {
    this.notService.setToRead(id)
      .subscribe(data => {
        if(this.listItem.indexOf(index) >= 0) {
          const pos = this.listItem.indexOf(index);

          this.listItem.splice(pos, 1);
          this.checkList();

        }
      });
  }

  getDate(date) {
    const newDate = new Date(date);
    const toString = newDate.getDay() + '-' + newDate.getMonth() + '-' + newDate.getFullYear();

    return toString;
  }

  checkList() {
    if(this.listItem.length === 0) {
      this.notItems = true;
    }
  }

  ngOnInit() {
  }

}
