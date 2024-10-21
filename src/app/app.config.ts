import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"lab-5---address-book","appId":"1:817320420203:web:9b994851648c7f13f7222e","storageBucket":"lab-5---address-book.appspot.com","apiKey":"AIzaSyDtlaX_4wRTwrNj5b06IOgyhlaq2HRqSps","authDomain":"lab-5---address-book.firebaseapp.com","messagingSenderId":"817320420203","measurementId":"G-X2W66FDXYL"})), provideFirestore(() => getFirestore())]
};
