import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { PopoverController } from '@ionic/angular/providers/popover-controller';
//import { WhathmenuComponent } from './popovers/whathmenu/whathmenu.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(plateform:Platform) {}

}
