import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../../../services/user.service';

@Component({
  selector: 'app-main-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './main-login.component.html',
  styleUrls: ['./main-login.component.scss']
})
export class MainLoginComponent {

  email: string = '';
  password: string = '';
  errorMessage: string = '';
  isCadastro: boolean = false;
  nomeCompleto: string = '';
  cadastroEmail: string = '';
  confirmaSenha: string = '';

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  toggleCadastro() {
    this.isCadastro = !this.isCadastro;
  }

  onSubmit() {
    if (!this.email || !this.password) {
      this.errorMessage = 'Preencha todos os campos!';
      return;
    }

    this.userService.login(this.email, this.password).subscribe(
      response => {
        if (response && response.length > 0 &&
          this.email === this.userService.currentUser.email &&
          this.password === this.userService.currentUser.password
        ) {
          console.log('Login realizado com sucesso!');
          if (this.userService.currentUser.isAdmin) {
            this.router.navigate(['admin']);
          } else {
            this.router.navigate(['home']);
          }
        } else {
          this.errorMessage = 'Email ou senha incorretos';
        }
      },
      error => {
        this.errorMessage = 'Ocorreu um erro durante o login';
        alert(this.errorMessage);
      }
    );
  }
}
