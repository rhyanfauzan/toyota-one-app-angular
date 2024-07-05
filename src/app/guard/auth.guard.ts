import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../service/auth-service.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard {
  isAllowed : Boolean = true;
  constructor(private router: Router, private authService : AuthServiceService) {}

  canActivate(): boolean {
    if (this.authService.getToken() != null) {
      return true;
    } 
    else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
