import type { Routes } from '@angular/router';
import { APP_ROUTES } from '@/app/domain';

export const routes: Routes = [
  {
    path: APP_ROUTES.WELCOME,
    loadComponent: () => import('@/app/presentation').then((m) => m.WelcomeComponent),
  },
  {
    path: APP_ROUTES.NOT_FOUND,
    loadComponent: () => import('@/app/presentation').then((m) => m.NotFoundScreenComponent),
  },
  {
    path: '',
    redirectTo: APP_ROUTES.WELCOME,
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: APP_ROUTES.NOT_FOUND,
  },
];
