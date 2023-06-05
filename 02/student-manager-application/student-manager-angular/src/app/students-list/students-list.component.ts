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
  // Cel: umożliwienie usuwania studenta
  // 1) Event binding - obsługę przycisku usuń z naszej tabeli - DONE!
  // 2) Przekazać informacje o wybranym studencie (lub o jego id) - DONE!
  // 3) Napisanie w studentService operacje DELETE - DONE!
  // 4) Wywołanie metody delete (StudentService) z komponentu - DONE!
  // 5) Powinniśmy poinformować użytkownika, że student został usunięty!
  // 6) Usuniemy go lokalnie z tablicy studentów - DONE!
  students: Student[] = [];
  isStudentRemoved = false;
  deletedId : number = 0;
  
  constructor(private studentService:StudentService){
    this.studentService.getStudents()
    .pipe(delay(2000))
    .subscribe((data)=>{
      console.log(data);
      this.students = data;
    });
    console.log("Test 1");

  }

  deleteStudent(id : number){
    this.studentService.deleteStudent(id)
      .subscribe(()=>{
        console.log("Usunięto student o id " + id);
        //Wyfiltrować wszystkich studentów != id usuwanego
        this.students = this.students.filter(s=> s.id !== id);
        this.isStudentRemoved = true;
        this.deletedId = id;
      });
  }
}
