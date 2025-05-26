import { Injectable } from '@angular/core';
import { Paciente, User } from '../interfaces/user';
import { Observable, retry } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  urlUser = "http://localhost:3000/user";

  getAllPaciente() {
    let data: Observable<Paciente[]>;
    data = this.http.get<Paciente[]>(this.urlUser);
    return data;
  };

  postPaciente(user: Omit<Paciente, 'id' | 'isAdmin' | 'password'>) {
    const userCompleto = {
      ...user,
      isAdmin: false
    };
    console.log("User Completo", userCompleto);

    return this.http.post<Paciente>(this.urlUser, userCompleto);
  };
};
