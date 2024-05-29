import { Routes } from '@angular/router';
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
import { FeedbackComponent } from './feedback/feedback.component';
import { AboutUsComponent } from './about-us/about-us.component';

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
        path: 'profile',
        component: ProfileComponent,
        canActivate: [authGuard],
      },
      {
        path: 'about-us',
        component: AboutUsComponent,
        canActivate: [authGuard],
      },
      { path: 'home', component: HomeComponent, canActivate: [authGuard] },
    ],
  },
  { path: 'feedback', component: FeedbackComponent, canActivate: [authGuard] },
  { path: 'settings', component: SettingsComponent, canActivate: [authGuard] },
  { path: '**', component: NotfoundComponent },
];
