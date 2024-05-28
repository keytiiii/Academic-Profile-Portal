import { Routes } from '@angular/router';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SettingsComponent } from './settings/settings.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { AuthLayoutComponent } from './auth-layout.component';
import { MainLayoutComponent } from './main-layout.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'student-dashboard',
        component: StudentDashboardComponent,
        canActivate: [authGuard],
      },
      {
        path: 'admin-dashboard',
        component: AdminDashboardComponent,
        canActivate: [authGuard],
      },
      {
        path: 'portfolio',
        component: PortfolioComponent,
        canActivate: [authGuard],
      },
      {
        path: 'settings',
        component: SettingsComponent,
        canActivate: [authGuard],
      },
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [authGuard],
      },
      { path: 'home', component: HomeComponent, canActivate: [authGuard] },
    ],
  },
  { path: '**', component: NotfoundComponent },
];
