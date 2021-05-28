import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscPage } from './disc.page';

const routes: Routes = [
  {
    path: '',
    component: DiscPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiscPageRoutingModule {}
