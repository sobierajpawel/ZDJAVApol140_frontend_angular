# Utworzenie komponentu nawigacji oraz relacja rodzic->dziecko

1. Za pomocą poniższego polecenia utwórz nowy komponent 

```ps
ng generate component navigation --skip-tests
```

2. Przenieś kod nawigacji z `app.component` do nowoutworzonego komponentu.

3. Dodaj dekorator `@Input()` oraz zmienną przechowującą tytuł w nowoutwrzonym komponencie nawigacyjnym.

```ts
export class NavigationComponent {
  @Input() title : string = "";
}
```

4. Przekaż title do komponentu nawigacji.

```html
<app-navigation [title]="title"></app-navigation>
```

