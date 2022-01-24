import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { APILoginData } from '../models/types';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isConnected = false;
  public failedConnection = false;
  public token!: string;

  constructor(private http: HttpClient) {

  }

  checkAuth(user: string, pass: string): Promise<boolean> {
    return lastValueFrom(this.http.post<APILoginData>(
      "https://g0lkzlavh1.execute-api.eu-west-3.amazonaws.com/dev/login",
      JSON.stringify(
        { email: user, password: pass }
      )
    ))
      .then(res => {
        this.token = res.token;
        this.isConnected = true;
        this.failedConnection = false;
        return true
      }, error => {
        this.failedConnection = true;
        return false
      })
  }
}
