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
    return this.http.get<StudentResponse>(`${this.baseUrl}/?results=25&inc=name,email,picture`);
  }

  //Crear un estudiante
  
  /* createStudents(student: StudentResponse):Observable<StudentResponse> {
    return this.http.post<StudentResponse>(`${this.baseUrl}/id/`);
  } */

  //Detalle de estudiante
  
  /* detailStudents(id:number):Observable<Student> {
    return this.http.get<Student>(`${this.baseUrl}/id/`);
  } */

  //Actualizar estudiante
  
  /* update(student: Student):Observable<Student> {
    return this.http.put<Student>(this.baseUrl);
  } */

  //Eliminar estudiante

  /* deleteStudent(id:number):Observable<Student> {
    return this.http.delete<Student>(`${this.baseUrl}/id/`);
  } */

}
