import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./gifs/pages/dash-board-page/dash-board-page'),
    children: [
      { path: 'trending', loadComponent: () => import('./gifs/pages/treding-page/treding-page') },
      { path: 'search', loadComponent: () => import('./gifs/pages/search-page/search-page') },
      {path: "**", redirectTo: "trending"}
    ],
  },

  { path: '**', redirectTo: 'dashboard' },
];
