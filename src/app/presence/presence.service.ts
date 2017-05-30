import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { AppSettings } from '../app-settings';
import {AuthService} from '../auth.service';

@Injectable()
export class PresenceService {

  constructor(private http: Http, private auth: AuthService) { }

  public savePresences(presenceList, lessonId) {


    presenceList.forEach(studentId => {
      const data = {
        lesson: lessonId,
        student: studentId
      };

      this.http.post(AppSettings.API_ENDPOINT + 'school/presences?lesson=' + lessonId, data, {
        headers: this.auth.getHeaders()
      })
        .subscribe(req => {
          console.log(req);
        });
    });
  }
}
