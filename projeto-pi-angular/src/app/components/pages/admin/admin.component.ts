import { Component } from '@angular/core';
import { HeaderAdminComponent } from "./header-admin/header-admin.component";
import { MainAdminComponent } from "./main-admin/main-admin.component";
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [HeaderAdminComponent, MainAdminComponent,RouterModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],

})
export class AdminComponent {

}
