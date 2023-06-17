# Utworzenie relacji rodzic-dziecko

1. Za pomocą poniższego polecenia wygeneruj komponenty nadrzędny do obsługi detali o studencie oraz 3 jako potomkowie dla nagłówka, szczegółów oraz przycisków.

```ps
ng generate component detail-student --skip-tests
```

```ps
ng generate component detail-student-header --skip-tests
```

```ps
ng generate component detail-student-content --skip-tests
```

```ps
ng generate component detail-action-buttons --skip-tests
```

2. Dodaj przycisk szczegółów w liście studentów oraz routing do komponentu nadrzędnego.

```html
    <a routerLink="/detail-student/{{student.id}}">Szczegóły</a>
```

```ts
  {path:"detail-student/:id", component:DetailStudentComponent}
```

3. Zbuduj komponent nadrzędny zawierający w kodzie html komponenty podrzędne.

```html
<app-detail-student-header></app-detail-student-header>
<app-detail-student-content *ngIf="student" [name]="student.name" [email]="student.email"></app-detail-student-content>
<app-detail-student-action-buttons (onCancelClicked)="getBack()"></app-detail-student-action-buttons>
```

4. Napisz kod w typescript do pobierania studenta oraz obsługi metod.

```ts
export class DetailStudentComponent implements OnInit{
  student! : Student;

  constructor(private studentService : StudentService, private route:ActivatedRoute, 
    private location : Location){

  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get("id");
    this.studentService.getStudent(Number(id))
      .subscribe(data=>{
        console.log(data);
        this.student = data;
      });
  }

  getBack(){
    this.location.back();
  }

}
```

5. Napisz kod w headerze zawierający prosty nagłówek.

6. Do zawartości dodaj następujący kod html oraz ts.

```html
<p>Imię i nazwisko studenta: {{name}}</p>
<p>Adres email: {{email}}</p>
```

```ts
export class DetailStudentContentComponent {
  @Input()
  name : string = "";
  @Input()
  email : string = "";
}

```

7. Do obsługi przycisków dodaj kod html oraz ts.

```html
<button class="btn btn-secondary" (click)="cancelClick()">Anuluj</button>
```

```ts
export class DetailStudentActionButtonsComponent {
  @Output() onCancelClicked = new EventEmitter();

  cancelClick(){
    this.onCancelClicked.emit();
  }
}

```
