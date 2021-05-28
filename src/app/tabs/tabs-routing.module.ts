import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'disc',
        loadChildren: () => import('../disc/disc.module').then(m => m.DiscPageModule)
      },
      {
        path: 'statuts',
        loadChildren: () => import('../statuts/statuts.module').then(m => m.StatutsPageModule)
      },
      {
        path: 'appels',
        loadChildren: () => import('../appels/appels.module').then(m => m.AppelsPageModule)
      },
      {
        path: 'camera',
        loadChildren: () => import('../camera/camera.module').then(m => m.CameraPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/disc',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/disc',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
