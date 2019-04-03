import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodolistComponent } from './todolist/todolist.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'my-todo',
    pathMatch: 'full'
  },
  { path: 'my-todo', 
    component: TodolistComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
