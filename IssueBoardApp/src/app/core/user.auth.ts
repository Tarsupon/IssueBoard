import { Injectable } from '@angular/core';
import { filter } from 'rxjs/operators';
import { IUser } from '../shared/interfaces';
import { GetFakeUsers } from './get-fake-users';
import { GoogleService } from './googleAuth.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuth {
  resUers: IUser[] = [];
  constructor(private users: GetFakeUsers, private google: GoogleService) {
    this.users.getUsers().pipe(filter(data => !!data)).subscribe( (users: IUser[]) => {
      users.map((user: IUser) => this.resUers.push(user))
    });
  }


  authentificate(): boolean {
    if (this.resUers.find((user: IUser) => user.username === localStorage.getItem('username') &&
                                                    user.password ===localStorage.getItem('password'))) {
      return true;
    } else if (this.google.signIn()) {
      return true;
    }
  }
}
