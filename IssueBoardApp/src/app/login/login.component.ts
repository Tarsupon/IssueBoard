import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent{

  userName = new FormControl('');
  password = new FormControl('');

  constructor(private router: Router) { }

  tryLogin() {
      this.setName();
      this.setPassword();
      this.router.navigateByUrl('kanban');
  }

  setName() {
    localStorage.setItem('username', this.userName.value);
  }

  setPassword() {
    localStorage.setItem('password', this.password.value);
  }
}
