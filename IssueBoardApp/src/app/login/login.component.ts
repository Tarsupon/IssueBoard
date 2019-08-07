import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { GoogleApiService } from 'ng-gapi';
import { GoogleService } from '../core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  userName = new FormControl('');
  password = new FormControl('');


  constructor(
    private router: Router,
    private gapiService: GoogleApiService,
    private gdriveResource: GoogleService,
  ) {
    this.gapiService.onLoad().subscribe();
  }

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

  signIn() {
    this.gdriveResource.signIn();
    this.router.navigateByUrl('kanban');
  }
}
