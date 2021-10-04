import { Todo } from './todo'

export class App {
  constructor() {
    this.message = 'Hello World!';
    this.todoList = [];
    this.todoList.push(new Todo('clean room'));
    this.todoList.push(new Todo('take out trash'));
    this.todoList.push(new Todo('aurelia practice'));
    this.newItem='';
  }

  addTodo() {
    this.todoList.push(new Todo(this.newItem));
    this.newItem = '';
  }

  removeTodo(todo) {
    this.todoList.splice(this.todoList.indexOf(todo), 1);
  }
}
