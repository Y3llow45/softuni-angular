import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoService } from './todo.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    // {
    //   provide: TodoService,
    //   useClass: TodoService
    // }
    // {
    //   provide: TodoService,
    //   useFactory: () => {
    //     return new TodoService()
    //   }
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
