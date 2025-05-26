import { Component, inject, OnInit } from '@angular/core';
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
  public userService = inject(UserService);

  ngOnInit(): void {

  }

  listaPaciente(): void {
    this.userService.getAllPaciente().subscribe((data: Paciente[]) => {
      this.pacienteData = data;
    });
  };


};
