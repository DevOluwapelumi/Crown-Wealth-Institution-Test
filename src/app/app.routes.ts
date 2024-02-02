import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { adminGuard } from './guards/admin.guard';

export const routes: Routes = [
    {path:'', component:LandingPageComponent},
    {path:'adminReg', component:AdminRegisterComponent},
    {path:'adminLog', component:AdminLoginComponent},
    // {path:'adminDash', component:AdminDashboardComponent},
    {path:'userReg', component:UserRegisterComponent},
    {path:'userLog', component:UserLoginComponent},
    {path: 'dashboard', children:[
        {path:'', component:AdminDashboardComponent},
    ], canActivate: [adminGuard]},
];