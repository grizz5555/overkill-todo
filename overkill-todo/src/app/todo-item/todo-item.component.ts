import { Component, OnInit } from '@angular/core';
import { Subscription, combineLatest } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { TodoItem } from 'src/app/bean/todo-item';
import { Store } from '@ngrx/store';

@Component({
  selector: 'tdo-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  todoGetterSub: Subscription;
  todo: TodoItem = null;
  newContent: String = null;

  constructor(private route: ActivatedRoute,
              private store: Store<any>) { }

  ngOnInit() {
    this.todoGetterSub = combineLatest(this.route.params, this.store.select('appState'))
      .subscribe(([pathParams, state]) => {
        this.todo = [...state.todos].find(td => td.id == pathParams['todoId']);
        this.newContent = this.todo.content
      })
  }

  ngOnDestroy(): void {
    this.todoGetterSub.unsubscribe();
  }

  updateTodoContent() {
    const message = {id: this.todo.id, content: this.newContent};
    this.store.dispatch({type: 'TODO_UPDATECONTENT', payload: message});
  }

}
