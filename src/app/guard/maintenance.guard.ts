import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MaintenanceService } from '../service/maintenance.service';
import { CommonResponse } from '../interfaces/api-response/commonresponse.interface';
import { MaintenanceResponse } from '../interfaces/api-response/maintenance.interface';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MaintenanceGuard 
{
  canActivateFlag!: boolean;
  constructor(private maintenanceService: MaintenanceService, private router: Router) {}

  canActivate(): boolean {
    this.maintenanceService.getMaintenanceResponse()
      .pipe(
        map((response: CommonResponse<MaintenanceResponse>) => {
          if (response.data?.maintenance == true) {
            //Redirect if its maintenance
            this.router.navigate(['/maintenance']);
            this.canActivateFlag = false;
          } else {
            //Proceed request if its false
            this.canActivateFlag = true;
          }
        })
      )
      .subscribe(
        () => {},
        (error) => {
          console.error('Error checking maintenance mode:', error);
          this.router.navigate(['/login']);
        }
      );
    return this.canActivateFlag;
  }
}
