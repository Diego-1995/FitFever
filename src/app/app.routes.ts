import { Routes } from '@angular/router';
import { AuthPage } from './auth/auth.page';
import { HomePage } from './auth/pages/home/home.page';
import { LoginPage } from './unauth/pages/login/login.page';
import { UnAuthPage } from './unauth/unauth.page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'u/login',
    pathMatch: 'full',
  },
  {
    path: 'u',
    loadComponent: () => import('./unauth/unauth.page').then(() => UnAuthPage),
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./unauth/pages/login/login.page').then(() => LoginPage),
      },
    ],
  },
  {
    path: 'a',
    loadComponent: () => import('./auth/auth.page').then(() => AuthPage),
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./auth/pages/home/home.page').then(() => HomePage),
      },
    ],
  },
];
