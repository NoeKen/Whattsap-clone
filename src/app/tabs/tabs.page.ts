import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { WhathmenuComponent } from '../popovers/whathmenu/whathmenu.component';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(public popoverCtrl: PopoverController) {}

  async setting(ev: any) {  
    const popover = await this.popoverCtrl.create({  
        component: WhathmenuComponent,  
        event: ev,  
        animated: true,  
        showBackdrop: true, 
    });  
    return await popover.present();  
  } 

}