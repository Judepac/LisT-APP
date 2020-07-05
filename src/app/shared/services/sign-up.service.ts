import { environment } from './../../../environments/environment';
import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  static URL = environment.url + 'auth/';

  constructor(private http: HttpClient) { }

createNewUser(user: User): Observable<string> {
   return this.http.post<string>(SignUpService.URL + 'signUp', user);
  }
}
