import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { AdminDashboard } from './pages/admin-dashboard/admin-dashboard';
import { CoporateDashboard } from './pages/coporate-dashboard/coporate-dashboard';
import { IndividualDashboard } from './pages/individual-dashboard/individual-dashboard';


export const routes: Routes = [
  { path: 'login', component: Login},
  { path: 'admin' , component: AdminDashboard},
  { path: 'corporate', component: CoporateDashboard},
  { path: 'individual', component: IndividualDashboard },

  // Ana sayfaya geleni direkt login'e yönlendir
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  // Bilinmeyen bir sayfa yazılırsa login'e at
  { path: '**', redirectTo: '/login' }
];
