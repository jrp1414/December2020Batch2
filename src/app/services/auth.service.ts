import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = "http://localhost:44319/";
  constructor(private http: HttpClient) { }
  isAuthenticated:boolean=false;
  signIn(user: any) {
    return this.http.post(this.baseUrl + "SignIn", user);
  }

  signUp(user: any) {
    return this.http.post(this.baseUrl + "SignUpUser", user);
  }
}
