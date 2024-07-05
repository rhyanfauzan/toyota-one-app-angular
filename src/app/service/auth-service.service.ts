import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponse, User } from '../interfaces/api-response/loginresponse.interface';
import { CommonResponse } from '../interfaces/api-response/commonresponse.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private successLoginJson = 'assets/json/success-response/login.json';
  private failedLoginJson = 'assets/json/fail-response/login.json';
  private TOKEN_KEY = 'authToken';
  private USER_KEY = 'user';

  constructor(private http: HttpClient) 
  {}
  
  loginUser(email: string, password: string): Observable<CommonResponse<LoginResponse>> {
    if (email === 'riki' && password === 'riki') {
      return this.getLoginJson();
    }
    else {
      return this.getFailedLoginJson();
    }
  }

  getLoginJson(): Observable<CommonResponse<LoginResponse>> {
    return this.http.get<CommonResponse<LoginResponse>>(this.successLoginJson);
  }

  getFailedLoginJson(): Observable<CommonResponse<LoginResponse>> {
    return this.http.get<CommonResponse<LoginResponse>>(this.failedLoginJson);
  }

  getToken(): string | null {
    if (typeof localStorage !== 'undefined') {
      const token = localStorage.getItem(this.TOKEN_KEY);
      if (token === null) {
        return null;
      }
      return token;
    } else {
      return null;
    }
  }

  getUserLocalStorage(): any | null {
    if (typeof localStorage !== 'undefined') {
      let user = localStorage.getItem(this.USER_KEY);
      if (user === null) {
        return null;
      }
      user = JSON.parse(user);
      return user;
    } else {
      return null;
    }
  }

  setObject(token : string, user : User): void {
    localStorage.setItem(this.TOKEN_KEY, token);
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }

  logout(): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem(this.TOKEN_KEY);
      localStorage.removeItem(this.USER_KEY);
    }
  }  
}
