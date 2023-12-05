import { Component } from '@angular/core';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login(username: string, password: string) {
    this.userService.login(username, password);
    this.router.navigate(['']);
  }
}
