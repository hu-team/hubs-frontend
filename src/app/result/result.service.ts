import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {AuthService} from "app/auth.service";
import {AppSettings} from "../app-settings";

@Injectable()
export class ResultService {

  constructor(private http: Http, private authService: AuthService) { }

  setGrade(opts) {
    opts.student_id = this.authService.getUser()["student_id"];
    const data = opts
    return this.http.post(AppSettings.API_ENDPOINT + 'school/results', data, {
      headers: this.authService.getHeaders()
    });
  }
}
