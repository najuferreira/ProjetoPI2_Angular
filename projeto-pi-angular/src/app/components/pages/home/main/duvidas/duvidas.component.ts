import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-duvidas',
  standalone: true,            // Tornar componente standalone
  imports: [CommonModule],     // Importa CommonModule para ngClass, ngIf, ngFor...
  templateUrl: './duvidas.component.html',
  styleUrls: ['./duvidas.component.scss']  // Corrigido para plural
})
export class DuvidasComponent {
  activeIndex: number | null = null;  // aceita null para indicar nenhum ativo

  duvidas = [
    {
      pergunta: 'O que devo esperar da primeira sessão?',
      resposta: 'A primeira sessão é um espaço de acolhimento, onde você poderá compartilhar...'
    },
    {
      pergunta: 'A terapia online é segura para tratar questões pessoais?',
      resposta: 'Sim. Utilizo plataformas seguras e criptografadas...'
    },
    {
      pergunta: 'Preciso instalar algum aplicativo para realizar a consulta?',
      resposta: 'As sessões são realizadas por videoconferência, e você não precisa se preocupar...'
    },
    {
      pergunta: 'Como é feito o pagamento das sessões?',
      resposta: 'O pagamento é realizado de forma antecipada por meio de transferência bancária...'
    },
    {
      pergunta: 'Atendimentos online são cobertos por planos de saúde?',
      resposta: 'Atendo de forma particular. No entanto, caso o seu plano de saúde ofereça reembolso...'
    }
  ];

  toggle(index: number): void {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}
