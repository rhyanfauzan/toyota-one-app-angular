import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CommonResponse } from '../interfaces/api-response/commonresponse.interface';
import { CreateUserResponse } from '../interfaces/api-response/userresponse.interface';
import { CreateUserRequest } from '../interfaces/api-request/createuserrequest.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private createUserUrl = 'https://your-api-endpoint.com/createUser';
  constructor(private http: HttpClient) { }

  createUser(user: CreateUserRequest): Observable<CommonResponse<CreateUserResponse>> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<CommonResponse<CreateUserResponse>>(this.createUserUrl, user, { headers });
  }

  // Method to return a dummy response
  createUserDummy(user: CreateUserRequest): Observable<CommonResponse<CreateUserResponse>> {
    const fakeResponse: CommonResponse<CreateUserResponse> = {
      responseCode: 200,
      status: true,
      message: "User created successfully",
      data: {
        id: 1,
        staffId: user.staffId,
        designation: user.designation,
        division: user.division,
        department: user.department,
        team: user.team,
        superiorEmail: user.superiorEmail
      }
    };
    
    return of(fakeResponse);
  }
}
