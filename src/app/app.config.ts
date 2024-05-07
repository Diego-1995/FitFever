import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { Router, provideRouter, withDisabledInitialNavigation, withViewTransitions } from '@angular/router';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app.routes';
import { AuthService } from './shared/services/auth.service';

export function initializeApp(
  _usersDataSvc: AuthService,
  router: Router
): () => void {
  return async (): Promise<void> => {
      router.initialNavigation();
    
    // const currentUser = await _usersDataSvc.loadUser();
    // if (currentUser) {
    // } else {
    //   router.navigate(['unauth']);
    // }
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withDisabledInitialNavigation(), withViewTransitions()), 
    provideAnimationsAsync(),
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      multi: true,
      deps: [AuthService, Router],
    },
  ],
};
