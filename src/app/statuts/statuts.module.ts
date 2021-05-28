import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StatutsPage } from './statuts.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { StatutsPageRoutingModule } from './statuts-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    StatutsPageRoutingModule
  ],
  declarations: [StaticRange]
})
export class StatutsPageModule {}
