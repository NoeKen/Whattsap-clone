import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppelsPage } from './appels.page';

const routes: Routes = [
  {
    path: '',
    component: AppelsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppelsPageRoutingModule {}
