import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent{

  userName = '';
  password = '';

  constructor(private router: Router) { }

  tryLogin() {
      localStorage.setItem('username', this.userName);
      localStorage.setItem('password', this.password);

      this.router.navigateByUrl('kanban');
  }
}
