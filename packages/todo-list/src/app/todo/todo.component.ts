import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input() complete: boolean;
  @Output() toggle = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

}
