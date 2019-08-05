import { Injectable } from '@angular/core';

export interface Todo {
  name: string;
  complete?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[] = [
    { name: 'Do a thing', complete: false },
    { name: 'Do a different thing', complete: true },
  ];

  constructor() { }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }
}
