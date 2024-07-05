// maintenance.service.ts
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonResponse } from '../interfaces/api-response/commonresponse.interface';
import { MaintenanceResponse } from '../interfaces/api-response/maintenance.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MaintenanceService {
  private maintenanceResponse = 'assets/json/success-response/maintenance.json';

  constructor
  (
    private http: HttpClient
  ) 
  {}

  getMaintenanceResponse(): Observable<CommonResponse<MaintenanceResponse>> {
    return this.http.get<CommonResponse<MaintenanceResponse>>(this.maintenanceResponse);
  }
}
