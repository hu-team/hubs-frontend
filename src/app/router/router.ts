import { Routes } from '@angular/router';
import { LoginComponent } from '../login/login/login.component';
import { OverviewComponent } from '../overview/overview/overview.component';
import { LessonOverviewComponent } from '../lesson/lesson-overview/lesson-overview.component';
import { Auth } from '../auth.guard';

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
    }
];

export class AppRouter {
}
