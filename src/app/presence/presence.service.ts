import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { AppSettings } from '../app-settings';
import {AuthService} from '../auth.service';
import 'rxjs/add/observable/forkJoin';

@Injectable()
export class PresenceService {

  constructor(private http: Http, private auth: AuthService) { }

  public savePresences(studentList) {
    const list = [];

    studentList.forEach(student => {
      const data = {
        present: student.present
      };

      const req = this.http.patch(AppSettings.API_ENDPOINT + 'school/presences/' + student.presence_id, data, {
        headers: this.auth.getHeaders()
      });

      list.push(req);
    });

    return Observable.forkJoin(list);
  }

  public getPresences(lessonId) {
    return this.http.get(AppSettings.API_ENDPOINT + 'school/presences?lesson=' + lessonId + '&prefill=1', {
      headers: this.auth.getHeaders()
    })
      .map((res: Response) => {
        const body = res.json();
        return body.results;
      })
      .catch(this.handleError);
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
