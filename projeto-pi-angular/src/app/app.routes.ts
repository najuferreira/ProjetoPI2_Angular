import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AdminComponent } from './components/pages/admin/admin.component';
import { loginComponent } from './components/pages/login/login.component';

export const routes:Routes = [
    {        path: "",
        component: HomeComponent
    },
    {        path: "login",
        component: loginComponent
    },
    {
        path: "Admin",
        component:AdminComponent
    }
];  
