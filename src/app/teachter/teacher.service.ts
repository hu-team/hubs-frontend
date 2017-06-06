import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {AuthService} from '../auth.service';
import {AppSettings} from '../app-settings';

@Injectable()
export class TeacherService {

  constructor(private http: Http, authService: AuthService) { }

  getStudentCounselor(id) {
    return this.http.get(AppSettings.API_ENDPOINT + 'core/teacher/' + id + '/')
      .map(res => res.json())
      .map( data => {
        return data.students;
      });
  }
}
