import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isUserLoggedIn: boolean = false;

  constructor() { }

  login(userName: String, password: String): Observable<any> {
    this.isUserLoggedIn = userName == "admin" && password == "admin";
    localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? 'true' : 'false');

    return of(this.isUserLoggedIn).pipe(
      delay(1000),
      tap(val => {
        console.log('Is User Authenication Successful' + val);
      })
    );
  }
}
