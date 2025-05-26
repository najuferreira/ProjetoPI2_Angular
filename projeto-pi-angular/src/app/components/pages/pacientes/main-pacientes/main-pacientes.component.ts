import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Paciente } from '../../../../../interfaces/user';
import { UserService } from '../../../../../services/user.service';

@Component({
  selector: 'app-main-pacientes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-pacientes.component.html',
  styleUrls: ['./main-pacientes.component.scss']
})
export class MainPacientesComponent implements OnInit {
  pacienteData: Paciente[] = [];
  isLoading: boolean = true;
  error: string | null = null;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadPatients();
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