import { Injectable } from '@angular/core';

export interface Todo {
  id: number;
  name: string;
  complete?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[] = [
    { id: 1, name: 'Do a thing', complete: false },
    { id: 2, name: 'Do a different thing', complete: true },
  ];

  constructor() { }

  addTodo(todo: Todo) {
    this.todos.push({
      ...todo,
      id: this.todos.length + 1,
    });
  }

  updateTodo(id: number, newValues: any) {
    this.todos = this.todos.reduce((todos, todo) => {
      if (todo.id === id) {
        const updatedTodo: Todo = {
          ...todo,
          ...newValues,
        };

        return todos.concat(updatedTodo);
      }

      return todos.concat(todo);
    }, []);
  }
}
