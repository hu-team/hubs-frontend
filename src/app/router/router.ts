import { Routes } from '@angular/router';
import { LoginComponent } from '../login/login/login.component';
import { OverviewComponent } from '../overview/overview/overview.component';
import { LessonOverviewComponent } from '../lesson/lesson-overview/lesson-overview.component';

import { Auth } from '../auth.guard';
import {StudentSingleComponent} from "../student/student-single/student-single.component";
import {MailComponent} from "../mail/mail/mail.component";
import {ResultSingleComponent} from "../result/result-single/result-single.component"
export const router: Routes = [
    {
      path: '',
      redirectTo: 'overview',
      pathMatch: 'full'
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'overview',
      component: OverviewComponent,
      canActivate: [Auth]
    },
    {
      path: 'lesson/:id',
      component: LessonOverviewComponent,
      canActivate: [Auth]
    },
    {
      path: 'student/:id',
      component: StudentSingleComponent,
      canActivate: [Auth]
    },

  {
    path: 'result/:id',
    component: ResultSingleComponent,
    canActivate: [Auth]
  },
    {
    path: 'mail/:id',
    component: MailComponent,
    canActivate: [Auth]
    }
];

export class AppRouter {
}
