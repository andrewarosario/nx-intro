import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'users',
    loadChildren: () => import('@nx-intro/users').then((m) => m.usersRoutes),
  },
  {
    path: 'metrics',
    loadChildren: () =>
      import('@nx-intro/metrics').then((m) => m.metricsRoutes),
  },
];
