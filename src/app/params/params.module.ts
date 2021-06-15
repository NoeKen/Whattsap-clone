import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ParamsPage } from './params.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ParamsPageRoutingModule } from './params-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: ParamsPage }]),
    ParamsPageRoutingModule,
  ],
  declarations: [ParamsPage]
})
export class ParamsPageModule {}
