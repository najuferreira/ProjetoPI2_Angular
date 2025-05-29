import { Injectable } from '@angular/core';
import { Paciente, User } from '../interfaces/user';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  urlUser = "http://localhost:3000/user";

  isAuthenticated: boolean = false;
  currentUser!: User;
  userLocalStorage: any;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  getAllPaciente(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>(this.urlUser);
  }

  postPaciente(user: Omit<Paciente, 'id' | 'isAdmin' | 'password'>): Observable<Paciente> {
    const userCompleto = {
      ...user,
      isAdmin: false
    };
    console.log("User Completo", userCompleto);
    return this.http.post<Paciente>(this.urlUser, userCompleto);
  }

  deletePaciente(id: number): Observable<any> {
    return this.http.delete(`${this.urlUser}/${id}`);
  }

  login(email: string, password: string): Observable<any> {
  return this.http.get<User[]>(`${this.urlUser}?email=${email}&password=${password}`).pipe(
    tap(users => {
      if (users && users.length > 0) {
        this.isAuthenticated = true;
        this.currentUser = users[0];
        const safeUser = this.sanitizeUser(users[0]);
        localStorage.setItem('@currentUser', JSON.stringify(safeUser));
      }
    }),
    catchError(error => {
      console.error('Erro ao realizar login:', error);
      return of(null);
    })
  );
}

  // exemplo de sanitização simples (você pode ajustar conforme necessário)
  sanitizeUser(user: User): Partial<User> {
    const { password, ...safeUser } = user;
    return safeUser;
  }
}
