import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatutsPage } from './statuts.page';

const routes: Routes = [
  {
    path: '',
    component: StatutsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatutsPageRoutingModule {}
