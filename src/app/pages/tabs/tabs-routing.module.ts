import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'characters',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../characters/characters.module').then(
                (m) => m.CharactersPageModule
              ),
          },
          {
            path: ':id',
            loadChildren: () =>
              import('../character-detail/character-detail.module').then(
                (m) => m.CharacterDetailPageModule
              ),
          },
        ],
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/characters',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
