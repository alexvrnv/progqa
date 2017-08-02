import { Component, OnInit } from '@angular/core'

const todos = [
  {
    title: 'Todo1',
    completed: true
  },
  {
    title: 'Todo2',
    completed: false
  },
  {
    title: 'Todo3',
    completed: true
  }
]

@Component({
  selector: 'app-first-test',
  templateUrl: './first-test.component.html',
  styleUrls: ['./first-test.component.css']
})
export class FirstTestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  todos = todos;
  newTodoTitle = '';

  toggle(todo) {
    todo.completed = !todo.completed;
    console.log('toggle', todo);
  }

  delete(todo) {
    let index = this.todos.indexOf(todo);
    if (index > -1) {
      this.todos.splice(index, 1);
    }
  }
  create() {
    let todo = {
      title: this.newTodoTitle,
      completed: false
    };
    this.todos.push(todo);
    this.newTodoTitle = '';
  }
}
