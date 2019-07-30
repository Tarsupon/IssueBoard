import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetFakeUsers {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(environment.GET_USERS_FROM_FAKE_SERVER);
  }
}
