import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './models/student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentApiUrl : string = "https://jsonplaceholder.typicode.com/users";

  constructor(private httpClient : HttpClient) { }

  // Metoda odpowiedzialna za pobranie studentów z zewnętrznego API
  getStudents(){
    return this.httpClient.get<Student[]>(this.studentApiUrl);
  }

  //Metoda wysyłająca żądanie DELETE w celu usunięcia studenta
  deleteStudent(studentId : number){
    let deleteStudentUrl = this.studentApiUrl + "/" + studentId;
    return this.httpClient.delete<Student>(deleteStudentUrl);
  }

  // Metoda wysyłającą żądanie POST w celu dodania studenta
  postStudent(student: Student){
    return this.httpClient.post<Student>(this.studentApiUrl,student);
  }
}
