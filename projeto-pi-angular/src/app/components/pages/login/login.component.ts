import { Component } from '@angular/core';
import { HeaderloginComponent } from './header-login/header-login.component';
import { MainLoginComponent } from './main-login/main-login.component';


@Component({
  selector: 'app-login',
  imports: [HeaderloginComponent, MainLoginComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class loginComponent {


}
