import { Routes } from '@angular/router';
import { Layout } from './core/layout/layout';
import { Dashboard } from './features/dashboard/dashboard';
import { Products } from './features/products/products';
import { Login } from './features/login/login';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [
  {
    path: 'login',
    component: Login,
  },
  {
    path: '',
    component: Layout,
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: Dashboard },
      { path: 'products', component: Products },
    ],
  },
  { path: '**', redirectTo: 'dashboard' },
];
