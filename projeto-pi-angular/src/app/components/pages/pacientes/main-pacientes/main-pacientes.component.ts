import { Component, inject, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Paciente } from '../../../../../interfaces/user';
import { UserService } from '../../../../../services/user.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

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


  constructor(private userService: UserService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loadPatients();

    this.pacienteForm = this.fb.group({
      nome: [''],
      data_nascimento: [''],
      cpf: [''],
      rg: [''],
      numero_contato: [''],
      email: [''],
      genero: [''],
      preferencia_pagamento: [''],
      profissao: [''],
      cep: [''],
      motivo_contato: [''],
      horario_atendimento: [''],
      conheceu_servico: [''],
      contato_emergencia: [''],
    });
  };

  registrarPaciente() {
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
    }
    console.log(`Novo usuário: ${novoUser}`);


    this.userService.postPaciente(novoUser).subscribe({
      next: (response) => {
        console.log(`Paciente criado ${response}`);
      },
      error(e) {
        console.error(`Erro ao criar Estoque ${e}`);
      }
    })
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
        console.error('Error loading patients:', err);
        this.error = 'Failed to load patients. Please try again.';
        this.isLoading = false;
      }
    });
  }

  refresh(): void {
    this.loadPatients();
  }
}