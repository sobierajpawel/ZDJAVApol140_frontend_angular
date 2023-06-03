import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './models/student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient : HttpClient) { }

  // Metoda odpowiedzialna za pobranie studentów z zewnętrznego API
  getStudents(){
    return this.httpClient.get<Student[]>("https://jsonplaceholder.typicode.com/users");
  }
}
