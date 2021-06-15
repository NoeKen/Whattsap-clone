import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule, USE_DEVICE_LANGUAGE } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { WhathmenuComponent } from './popovers/whathmenu/whathmenu.component';

export const firebaseConfig = {
  apiKey: "AIzaSyC2Syp0hPjZr21jNLhskAmMsa3B_MonTWA",
  authDomain: "whattsap-clone.firebaseapp.com",
  projectId: "whattsap-clone",
  storageBucket: "whattsap-clone.appspot.com",
  messagingSenderId: "367325730070",
  appId: "1:367325730070:web:1d8410de75d250fa2e2c37",
  measurementId: "G-K8CMT68FHT"
};

@NgModule({
  declarations: [
    AppComponent,
    WhathmenuComponent
  ],
  entryComponents: [WhathmenuComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
  ],
  providers: [
    AngularFirestoreModule,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})

export class AppModule {}
