import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetFakeDataService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(environment.GET_FROM_FAKE_SERVER);
  }
}
