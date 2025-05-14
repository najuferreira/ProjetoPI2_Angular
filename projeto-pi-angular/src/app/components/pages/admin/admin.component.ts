import { Component } from '@angular/core';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { MainAdminComponent } from './main-admin/main-admin.component';

@Component({
  selector: 'app-admin',
  imports: [HeaderAdminComponent, MainAdminComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

  

}
