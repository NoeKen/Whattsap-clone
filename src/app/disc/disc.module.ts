import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DiscPage } from './disc.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { DiscPageRoutingModule } from './disc-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    DiscPageRoutingModule
  ],
  declarations: [DiscPage]
})
export class DiscPageModule {}
