import { Routes } from '@angular/router';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    { path: 'student-dashboard', component: StudentDashboardComponent },
    { path: 'admin-dashboard', component: AdminDashboardComponent},
    { path: 'register', component: RegisterComponent},
];
