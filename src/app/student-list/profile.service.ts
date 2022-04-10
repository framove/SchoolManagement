import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { StudentResponse } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private baseUrl: string;

  constructor( private http: HttpClient ) { 
    this.baseUrl="https://randomuser.me/api";
  }

  //Obtener lista de estudiantes

  getStudents():Observable<StudentResponse> {
    return this.http.get<StudentResponse>(`${this.baseUrl}/?results=10&inc=name,email,picture`);
  }

}
