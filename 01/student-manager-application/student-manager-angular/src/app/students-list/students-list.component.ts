import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../models/student';
import { delay } from 'rxjs';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent {
  // Cel: pobranie danych o studentach z zewnętrznego API
  // 1) Stworzyć interfejs Studenta - id, email, name. - DONE
  // 2) Stworzenie klasy (serwis) do komunikacji z serwerem
  // GET - w celu pobrania danych - DONE!
  // 3) Musimy użyć StudentService do pobrania studentów!
  // StudentListComponent-> StudentService.getStudents() - DONE!

  // 4) Te dane z serwera podpiąć pod nasz widok/html!
  // HTTP GET (url) -> do serwera -> odpowiedź (json)
  students: Student[] = [];

  constructor(private studentService:StudentService){
    this.studentService.getStudents()
    .pipe(delay(2000))
    .subscribe((data)=>{
      console.log(data);
      this.students = data;
    });
    console.log("Test 1");

  }
}
