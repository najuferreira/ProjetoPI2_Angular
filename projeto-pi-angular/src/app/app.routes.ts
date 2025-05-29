import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { AdminComponent } from './components/pages/admin/admin.component';
import { PacientesComponent } from './components/pages/pacientes/pacientes.component';
import { AgendaComponent } from './components/pages/agenda/agenda.component';
import { DuvidasComponent } from './components/pages/duvidas/duvidas.component';
import { FeedbackComponent } from './components/pages/feedback/feedback.component';
import { MainComponent } from './components/pages/pag404/main/main.component';



export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "login", component: LoginComponent },
    { path: "admin", component: AdminComponent },
    { path: "admin/pacientes", component: PacientesComponent },
    { path: "admin/agenda", component: AgendaComponent },
    { path: "admin/duvidas", component: DuvidasComponent },
    { path: "admin/feedback", component: FeedbackComponent },
    { path: 'pagina-nao-encontrada', component: MainComponent },
    { path: '**', redirectTo: 'pagina-nao-encontrada' }
];