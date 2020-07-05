import { HttpClient, HttpResponse } from '@angular/common/http';
import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  static URL = environment.url + 'auth/';
  user: User;

  constructor(private http: HttpClient) { }

  connection(user: User): Observable<any> {
    return this.http.post<User>(SignInService.URL + 'signIn', user, {observe: 'response'}).pipe(
      tap((response: HttpResponse<any>) => {
        const token = response.headers.get('JWT-TOKEN');
        localStorage.setItem('JWT-TOKEN', token);
        this.user = response.body.user;
        console.log(response.body.user);

        return response.body;
      }));
  }
}
