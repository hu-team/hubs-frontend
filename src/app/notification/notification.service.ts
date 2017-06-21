import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {AppSettings} from "../app-settings";
import {AuthService} from "../auth.service";
import {Observable} from "rxjs/Observable";

@Injectable()
export class NotificationService {

  constructor(private authService: AuthService, private http: Http) { }

  public getMininotification() {
    return this.http.get(AppSettings.API_ENDPOINT + 'notifications/mininotifications/', {
      headers: this.authService.getHeaders()
    })
      .map(this.extractData, this)
      .catch(this.handleError);
  }

  public getNotification() {
    return this.http.get(AppSettings.API_ENDPOINT + 'notifications/notifications/', {
      headers: this.authService.getHeaders()
    })
      .map(res => {
        const body = res.json();
        const arr = body.results.filter(v => {
          if(!v.is_read) {
            return v;
          };
        });

        return arr;
      })
      .catch(this.handleError);
  }

  public setToRead(id) {
    return this.http.patch(AppSettings.API_ENDPOINT + 'notifications/notifications/' + id + '/', {
      is_read: true,
    },
      {
        headers: this.authService.getHeaders()
      });
  }

  private extractData(res: Response) {
    const body = res.json();
    const result = {
      notRead: 0,
    }

    body.results.forEach(v => {
      if(!v.is_read) {
        result.notRead++;
      }

    });

    return result;
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
