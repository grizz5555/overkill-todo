import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'my-todos',
    pathMatch: 'full'
  },
  { 
    path: 'my-todos', 
    component: TodolistComponent 
  },
  {
    path: 'my-todo/:todoId', 
    component: TodoItemComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
