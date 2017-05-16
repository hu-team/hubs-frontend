import { Routes } from '@angular/router';
import { LoginComponent } from '../login/login/login.component';

export const router: Routes = [
    {
      path: 'login',
      component: LoginComponent
    }
];

export class AppRouter {
}
