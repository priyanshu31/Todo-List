import { Component, EventEmitter } from '@angular/core';
import { Todo } from './Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo-List';

  todo: Todo[]

  addTodo(todo: Todo){
    
    let allTodos = []
    let todos = localStorage.getItem("todos")
    if(todos)
      allTodos = JSON.parse(todos)

    allTodos.push(todo)
    todo = allTodos
    
    localStorage.clear();
    localStorage.setItem("todos", JSON.stringify(allTodos))
  }
}
