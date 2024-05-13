import { Routes } from '@angular/router';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SettingsComponent } from './settings/settings.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
   { path: '', redirectTo: 'welcome', pathMatch: 'full'},
   { path: 'welcome', component: WelcomeComponent},
   { path: 'student-dashboard', component: StudentDashboardComponent },
   { path: 'admin-dashboard', component: AdminDashboardComponent},
   { path: 'register', component: RegisterComponent},
   { path: 'login', component: LoginComponent},
   { path: 'portfolio', component: PortfolioComponent},
   { path: 'settings', component: SettingsComponent},
   { path: 'profile', component: ProfileComponent },
   { path: '**', component: NotfoundComponent } // Redirect to NotFoundComponent for unknown routes
];
