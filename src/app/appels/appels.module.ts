import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppelsPage } from './appels.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { AppelsPageRoutingModule } from './appels-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: AppelsPage }]),
    AppelsPageRoutingModule,
  ],
  declarations: [AppelsPage]
})
export class AppelsPageModule {}
