import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { TodoService } from './todo.service';
import { ElementRef } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';
import { mergeMap } from 'rxjs/operators';

function fromFetch(url: string) {
  return new Observable((observer) => {
    fetch(url).then(res => {
      observer.next(res)
      observer.complete()
    }).catch(err => observer.error());
  })
}

declare const data:Array<5>;
console.log(data)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
})
export class AppComponent implements AfterViewInit  {
  title = 'test-app';
  todo = {
    title: 'Hello'
  }

  @ViewChild('input', {static:false}) input!: ElementRef;

  constructor(todoService: TodoService) {
    //console.log(todoService)
    //todoService.loadTodos();
    setTimeout(() => {
      this.title = 'changed-title'
      this.todo = {title: '123'}
    }, 1000);
  }
  ngAfterViewInit(): void {
    fromEvent(this.input.nativeElement, 'keyup')
    .pipe(
      map((e: any) => (e.target as HTMLInputElement).value),
      mergeMap(query => fromFetch(`https://jsonplaceholder.typicode.com/users?${query}`))
      )
    .subscribe(console.log)
  }
}
