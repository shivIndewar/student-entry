import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideState, provideStore } from '@ngrx/store';
import {provideStoreDevtools} from '@ngrx/store-devtools';
import { studentsReducer } from './state/students-reducer';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';
import { StudentsRecordsEffects } from './state/students-records-effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideClientHydration(), 
    provideEffects(StudentsRecordsEffects),
    provideAnimationsAsync(), 
    provideStore(),
    provideState({
      name :'students',
      reducer : studentsReducer
    }),
    provideStoreDevtools({maxAge:25,logOnly:false})
  ]
};
