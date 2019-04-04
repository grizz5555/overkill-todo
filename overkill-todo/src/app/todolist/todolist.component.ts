import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoItem } from '../bean/todo-item';

@Component({
  selector: 'tdo-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  constructor(private store: Store<any>) { }

  todos: TodoItem[] = [];

  ngOnInit() {
    this.store.select('appState').subscribe( data => {
      this.todos = [...data.todos].sort((a, b) => {
        if (a.close === b.close) {
          return a.id - b.id;
        }
        if (a.close) {
          return 1;
        }  
        return -1;
      });
    })
  }

  toggleCheckbox(id: number) {
    console.log('id : ' + id);
    this.store.dispatch({type: 'TOGGLE_CLOSE', payload: id});
  }

  newTodo() {
    const todo = {title: 'Nouvelle todo', content: '', close: false};
    this.store.dispatch({type: "NEW_TODO", payload: todo});
  }

}
