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

  getAllPaciente(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>(this.urlUser);
  };

  postPaciente(user: Omit<Paciente, 'id' | 'isAdmin' | 'password'>): Observable<Paciente> {
    const userCompleto = {
      ...user,
      isAdmin: false
    };
    console.log("User Completo", userCompleto);

    return this.http.post<Paciente>(this.urlUser, userCompleto);
  };

  deletePaciente(id: number): Observable<any> {
    return this.http.delete(`${this.urlUser}/${id}`);
  };
}