import { Component } from '@angular/core';
import { HeaderAdminComponent } from "../admin/header-admin/header-admin.component";
import { MainPacientesComponent } from "./main-pacientes/main-pacientes.component";

@Component({
  selector: 'app-pacientes',
  standalone: true,
  imports: [HeaderAdminComponent, MainPacientesComponent],
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent {



}
