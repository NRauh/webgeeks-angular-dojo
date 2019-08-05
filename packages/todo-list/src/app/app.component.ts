import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TodoService, Todo } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todoForm = new FormGroup({
    name: new FormControl('', Validators.required),
  });

  constructor(
    public todoService: TodoService,
  ) {
  }

  addTodo() {
    this.todoService.addTodo(this.todoForm.value);
  }

  markTodo(id: number, complete: boolean) {
    this.todoService.updateTodo(id, { complete });
  }
}
