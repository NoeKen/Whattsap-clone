import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResetPassWordPage } from './reset-pass-word.page';

const routes: Routes = [
  {
    path: '',
    component: ResetPassWordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResetPassWordPageRoutingModule {}
