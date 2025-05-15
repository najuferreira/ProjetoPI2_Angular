import { Component } from '@angular/core';
import { HeaderAdminComponent } from "../admin/header-admin/header-admin.component";
import { MainDuvidasComponent } from "./main-duvidas/main-duvidas.component";

@Component({
  selector: 'app-duvidas',
  imports: [HeaderAdminComponent, MainDuvidasComponent],
  templateUrl: './duvidas.component.html',
  styleUrl: './duvidas.component.scss'
})
export class DuvidasComponent {

}
