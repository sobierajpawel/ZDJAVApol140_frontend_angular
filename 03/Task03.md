# Utworzenie własnego pipe

1. Za pomocą poniższego polecenia utwórz nowy pipe 

```ps
ng generate pipe custom-text-transform 
```

2. Utwórz kod pipe tak by usuwał wszystkie przedrostki jak `Mr. Mrs. Ms. ms.` itd.

```ts
@Pipe({
  name: 'remove_honorific'
})
export class CustomTextTransformPipe implements PipeTransform {

  transform(value : string): string {
    new Array<string>('Mr.' ,"Mrs.", "Ms.", "mrs.").forEach(element => {
        if (value.includes(element)){
          value = value.split(element).pop()!;
        }
    });
   
    return value.trimStart();
  }
}
```

3. Użyj własnego pipe w liście studentów np. z innymi pipe'mi.

```html
 <td>{{student.name | lowercase | remove_honorific}}</td>
```

