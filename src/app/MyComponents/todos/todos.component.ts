import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { Todo } from '../../Todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[]

  constructor() { 
    
    let alltodos = localStorage.getItem("todos")
    if(alltodos)
      this.todos = JSON.parse(alltodos)
  }
    
  refreshTodo() {
      
    let alltodos = localStorage.getItem("todos")
    if(alltodos)
      this.todos = JSON.parse(alltodos)
  }

  ngOnInit(): void {

    setInterval(() => { 
      this.refreshTodo(); 
    }, 1000);

  }

  deleteTodo(todo:Todo){
    
    let index = this.todos.indexOf(todo)
    this.todos.splice(index, 1)
    localStorage.clear()
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }

}
