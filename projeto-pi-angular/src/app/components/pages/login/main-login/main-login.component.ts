import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-login',
  imports: [CommonModule],
  templateUrl: './main-login.component.html',
  styleUrl: './main-login.component.scss'
})
export class MainLoginComponent {

  isCadastro: boolean = false;

  toggleCadastro() {
    this.isCadastro = !this.isCadastro;
  }

}
