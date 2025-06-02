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
  isLoading: boolean = false;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  toggleCadastro() {
    this.isCadastro = !this.isCadastro;
    this.errorMessage = ''; // Limpa mensagens de erro ao alternar
  }

  onSubmit() {
    if (!this.email || !this.password) {
      this.errorMessage = 'Preencha todos os campos!';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    this.userService.login(this.email, this.password).subscribe({
      next: (response) => {
        this.isLoading = false;

        // Verifica se a resposta é válida
        if (response && response.length > 0) {
          // Verificação adicional opcional (pode ser removida se o backend já validou)
          if (this.email === response[0].email) {
            console.log('Login realizado com sucesso!');

            // Redireciona conforme o tipo de usuário
            if (response[0].isAdmin) {
              this.router.navigate(['/admin']);
            } else {
              this.router.navigate(['/home']);
            }
          } else {
            this.errorMessage = 'Credenciais inválidas';
          }
        } else {
          this.errorMessage = 'Email ou senha incorretos';
        }
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = 'Ocorreu um erro durante o login';
        console.error('Erro no login:', error);
      }
    });
  }
}