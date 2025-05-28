import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Paciente } from '../../../../../interfaces/user';
import { UserService } from '../../../../../services/user.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-main-pacientes',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './main-pacientes.component.html',
  styleUrls: ['./main-pacientes.component.scss']
})
export class MainPacientesComponent implements OnInit {
  pacienteData: Paciente[] = [];
  isLoading: boolean = true;
  error: string | null = null;
  pacienteForm!: FormGroup;

  // Opções para os grupos de botões
  generos = ['Masculino', 'Feminino', 'Outro'];
  pagamentos = ['Mensal', 'Semanal'];
  motivos = ['Ansiedade', 'Depressão', 'Estresse', 'Relacionamento', 'Auto-conhecimento'];
  horarios = ['Manhã', 'Tarde', 'Noite', 'Indiferente'];
  origens = ['Indicação', 'Rede social', 'Google', 'Outro'];

  constructor(private userService: UserService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loadPatients();
    this.initForm();
  }

  initForm(): void {
    this.pacienteForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      data_nascimento: ['', Validators.required],
      cpf: ['', [Validators.required, Validators.pattern(/^(\d{3}\.?\d{3}\.?\d{3}-?\d{2}|\d{11})$/)]],
      rg: ['', Validators.required],
      numero_contato: ['', [Validators.required, Validators.pattern(/^\d{10,11}$/)]],
      email: ['', [Validators.required, Validators.email]],
      genero: ['', Validators.required],
      preferencia_pagamento: ['', Validators.required],
      profissao: [''],
      cep: ['', [Validators.required, Validators.pattern(/^(\d{5}[.-]?\d{3}|\d{8})$/)]],
      motivo_contato: ['', Validators.required],
      horario_atendimento: ['', Validators.required],
      conheceu_servico: ['', Validators.required],
      contato_emergencia: ['', [Validators.required, Validators.pattern(/^\d{10,11}$/)]]
    });
  }

  // Métodos para seleção de opções
  selecionarOpcao(controlName: string, valor: string): void {
    this.pacienteForm.get(controlName)?.setValue(valor);
    this.pacienteForm.get(controlName)?.markAsTouched();
  }

  // Verifica se uma opção está selecionada
  opcaoSelecionada(controlName: string, valor: string): boolean {
    return this.pacienteForm.get(controlName)?.value === valor;
  }

  registrarPaciente(): void {
    if (this.pacienteForm.invalid) {
      this.pacienteForm.markAllAsTouched();
      alert('Por favor, preencha todos os campos obrigatórios corretamente.');
      return;
    }

    const novoUser: Omit<Paciente, 'id' | 'isAdmin' | 'password'> = {
      nome: this.pacienteForm.value.nome,
      data_nascimento: this.pacienteForm.value.data_nascimento,
      cpf: this.pacienteForm.value.cpf,
      rg: this.pacienteForm.value.rg,
      numero_contato: this.pacienteForm.value.numero_contato,
      email: this.pacienteForm.value.email,
      genero: this.pacienteForm.value.genero,
      preferencia_pagamento: this.pacienteForm.value.preferencia_pagamento,
      profissao: this.pacienteForm.value.profissao,
      cep: this.pacienteForm.value.cep,
      motivo_contato: this.pacienteForm.value.motivo_contato,
      horario_atendimento: this.pacienteForm.value.horario_atendimento,
      conheceu_servico: this.pacienteForm.value.conheceu_servico,
      contato_emergencia: this.pacienteForm.value.contato_emergencia
    };

    this.userService.postPaciente(novoUser).subscribe({
      next: (response) => {
        console.log('Paciente criado:', response);
        this.loadPatients();
        this.pacienteForm.reset();
      },
      error: (e) => {
        console.error('Erro ao criar paciente:', e);
        this.error = 'Erro ao cadastrar paciente. Por favor, tente novamente.';
      }
    });
  }

  deletePaciente(id: number): void {
    if (confirm('Tem certeza que deseja deletar este paciente?')) {
      this.userService.deletePaciente(id).subscribe({
        next: () => {
          console.log('Paciente deletado com sucesso');
          this.loadPatients();
        },
        error: (err) => {
          console.error('Erro ao deletar paciente:', err);
          this.error = 'Falha ao deletar paciente. Por favor, tente novamente.';
        }
      });
    }
  }

  loadPatients(): void {
    this.isLoading = true;
    this.error = null;

    this.userService.getAllPaciente().subscribe({
      next: (data: Paciente[]) => {
        this.pacienteData = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Erro ao carregar pacientes:', err);
        this.error = 'Falha ao carregar pacientes. Por favor, tente novamente.';
        this.isLoading = false;
      }
    });
  }

  refresh(): void {
    this.loadPatients();
  }

  // Método auxiliar para facilitar o acesso aos controles no template
  get f() {
    return this.pacienteForm.controls;
  }
}