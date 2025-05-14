import { Component } from '@angular/core';
import { HeaderAdminComponent } from "../admin/header-admin/header-admin.component";
import { MainAgendaComponent } from "./main-agenda/main-agenda.component";

@Component({
  selector: 'app-agenda',
  imports: [HeaderAdminComponent, MainAgendaComponent],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.scss'
})
export class AgendaComponent {

}
