import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Event } from '@angular/router';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  deleteTodo(todo: Todo) {

    this.todoDelete.emit(todo)
    console.log("Onclick Fired")
  }
}
