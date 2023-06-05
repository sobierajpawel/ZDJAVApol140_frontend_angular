import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../models/student';
import { delay } from 'rxjs';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {
    // Cel: Stworzenie działajacego formularza do dodawania studenta
    // 1) Draft formularza w html - DONE!
    // 2) Ostylowanie formularza - z wykorzystaniem bootstrap - DONE!
    // 3) Podpięcie formularza pod ts - DONE!
    // 4) StudentService musimy zaimplemntować żądanie typu POST - DONE!
    // 5) Po submicie->wywołamy metodę dodawania do serwera - DONE!
    // 6) Notyfikacja dla użytkownika
    // ... 
    isStudentSubmited = false;
    isSubmiting = false;
    isValidationError = false;

    constructor(private studentService : StudentService){

    }

    save(name: string, email: string){
      // console.log("Przakazany name: "+ name);
      // console.log("Przekazany email: "+ email);
      this.isValidationError = false;
      
      if (!name || !email){
        this.isValidationError = true;
        return;
      }
      
      this.isSubmiting = true;

      this.studentService.postStudent({name,email} as Student)
        .pipe(delay(2000))
        .subscribe((data)=>{
          this.isStudentSubmited = true;
          this.isSubmiting = false;
        });

      return false;
    }
}
