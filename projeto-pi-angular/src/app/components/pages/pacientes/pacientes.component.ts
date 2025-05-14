import { Component } from '@angular/core';
import { HeaderAdminComponent } from "../admin/header-admin/header-admin.component";
import { MainPacientesComponent } from "./main-pacientes/main-pacientes.component";

@Component({
  selector: 'app-pacientes',
  imports: [HeaderAdminComponent, MainPacientesComponent],
  templateUrl: './pacientes.component.html',
  styleUrl: './pacientes.component.scss'
})
export class PacientesComponent {

}
