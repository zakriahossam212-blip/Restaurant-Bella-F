import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'menu',
    loadComponent: () =>
      import('./features/home/components/menu.component').then(
        m => m.FullMenuComponent
      ),
  },
  {
    path: 'story',
    loadComponent: () =>
      import('./features/story/story.component').then(m => m.StoryPage),
  },
  {
    path: 'chef',
    loadComponent: () =>
      import('./features/chef/chef.component').then(m => m.ChefPage),
  },
  {
    path: 'reservation',
    loadComponent: () =>
      import('./features/reservation/reservation.component').then(
        m => m.ReservationPage
      ),
  },
  { path: '**', redirectTo: '' },
];
