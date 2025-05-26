import { Injectable } from '@angular/core';
import { Paciente } from '../interfaces/user';
import { Observable } from 'rxjs';
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
  }


}
