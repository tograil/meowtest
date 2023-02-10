import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: boolean = false;

  constructor(private http:HttpClient) { }

  get isLoggedIn() {
    return this.loggedIn;
  }

  set isLoggedIn(value: boolean) {
    this.loggedIn = value;
  }

  login(email: string, password: string): Observable<boolean> {
    let login: Login = {
      password: password,
      email: email
    }

    return this.http.post<Result>("/authentication/login", login).pipe(map(result => {
      this.isLoggedIn = result.success;

      return this.isLoggedIn;
    }));
  }
}

export interface Login {
  email: string;
  password: string;
}

export interface Result {
  success: boolean
}
