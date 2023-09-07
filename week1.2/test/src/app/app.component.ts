import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Test App Title';
  badCurly = 'my-class';
  visible = false;
  users = [
    {
      name: 'User1',
      age: 10
    },
    {
      name: 'User2',
      age: 22
    },
    {
      name: 'User3',
      age: 12
    },
  ];
  toggleVisible() {
    this.visible = !this.visible;
  }
  setTitle(newTitle:string) {
    this.title = newTitle;
  }
}
