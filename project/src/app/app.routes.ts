import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { AdminDashboard } from './pages/admin-dashboard/admin-dashboard';
import { CoporateDashboard } from './pages/coporate-dashboard/coporate-dashboard';
import { IndividualDashboard } from './pages/individual-dashboard/individual-dashboard';
import { HomeComponent } from './pages/home/home';

export const routes: Routes = [
{ path: '', component: HomeComponent },
  { path: 'login', component: Login },
  { path: 'admin', component: AdminDashboard },
  { path: 'corporate', component: CoporateDashboard },
  { path: 'individual', component: IndividualDashboard },
  { path: '**', redirectTo: '' }
];
