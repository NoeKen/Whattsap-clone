import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResetPassWordPageRoutingModule } from './reset-pass-word-routing.module';

import { ResetPassWordPage } from './reset-pass-word.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResetPassWordPageRoutingModule
  ],
  declarations: [ResetPassWordPage]
})
export class ResetPassWordPageModule {}
