import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';

export const routes: Routes = [
    {        path: "home",
        component: HomeComponent
    },
    {        path: "admin",
        component: AdminComponent
    }

];
