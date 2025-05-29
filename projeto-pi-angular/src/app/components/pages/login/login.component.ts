import { Component } from '@angular/core';
import { HeaderloginComponent } from './header-login/header-login.component';
import { MainLoginComponent } from './main-login/main-login.component';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../../../services/user.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HeaderloginComponent, MainLoginComponent, RouterModule, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  onSubmit() {
    this.userService.login(this.email, this.password).subscribe(
      response => {
        if (
          response && response.length > 0 &&
          this.email !== '' &&
          this.password !== '' &&
          this.email === this.userService.currentUser.email &&
          this.password === this.userService.currentUser.password
        ) {
          console.log('Login realizado com sucesso!');
          if (this.userService.currentUser.isAdmin) {
            console.log("Entrou como Admin");
            this.router.navigate(['admin']);
          } else {
            this.router.navigate(['home']);
          }
        } else {
          console.log("Email", this.email);
          console.log("Senha", this.password);
          this.errorMessage = 'Email ou senha incorretos';
          console.log(this.errorMessage);
        }
      },
      error => {
        this.errorMessage = 'Ocorreu um erro durante o login';
        alert(this.errorMessage);
      }
    );
  }
}
