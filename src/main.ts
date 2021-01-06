import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import firebase from 'firebase';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

const firebaseConfig = {
  apiKey: 'AIzaSyBr_1wIpEGDj7ozSPUTIyVe_ScsEtVPVfU',
  authDomain: 'ben-golan-portfolio.firebaseapp.com',
  projectId: 'ben-golan-portfolio',
  storageBucket: 'ben-golan-portfolio.appspot.com',
  messagingSenderId: '846991903715',
  appId: '1:846991903715:web:f4bf1e6255e8876a4feed6',
  measurementId: 'G-NCQHK8K0GG',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
