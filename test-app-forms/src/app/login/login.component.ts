import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  testValue = 'This is a test value';
uuidModel: any;
  constructor() {}

  onSubmit(value: any) {
    console.log(value);
  }
}
