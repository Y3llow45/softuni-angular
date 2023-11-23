import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent as UserListComponent} from './user/list/list.component';
import { ListComponent as TodoListComponent } from './todo/list/list.component';
import { UserComponent } from './user/user/user.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: TodoListComponent
  },
  {
    path: 'user',
    redirectTo: 'user/list'
  },
  {
    path: 'user/list',
    component: UserListComponent
  },
  {
    path: 'user/:id',
    component: UserComponent
  }
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

export const AppRoutingModule = RouterModule.forRoot(routes);
