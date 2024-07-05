import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from '../../service/auth-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginResponse } from '../../interfaces/api-response/loginresponse.interface';
import { CommonResponse } from '../../interfaces/api-response/commonresponse.interface';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.css'
})
export class LoginComponentComponent implements OnInit {
  loginForm: FormGroup;
  isLoggedIn!: string;

  constructor(
    private fb: FormBuilder,
    private router: Router, private authService: AuthServiceService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['logout']) {
        this.logout();
      }
      this.alreadyLogin();
    });
  }

  onLoginSubmit(): void {
    if (this.loginForm.valid) {
      this.loginProcess();
    }
  }

  loginProcess(): void {
    /*LOGIN PROCESS REQUEST*/
    const email: string = this.loginForm.get('email')?.value as string;
    const password: string = this.loginForm.get('password')?.value as string;
    this.authService.loginUser(email, password).subscribe(
      (response: CommonResponse<LoginResponse>) => {
        if (response.status === true) {
          const snackbarRef = this.snackBar.open(response.message, 'Close', {
            duration: 1000,
            verticalPosition: 'top'
          });
          snackbarRef.afterDismissed().subscribe(() => {
            this.router.navigate(['/dashboard']);
          });

          // SET TOKEN
          this.authService.setObject(response.data!.token, response.data!.user);
        } else {
          this.snackBar.open(response.message, 'Close', {
            duration: 1000,
            verticalPosition: 'top'
          });
        }
      },
      (error) => {
        this.snackBar.open(error, 'Close', {
          duration: 1000,
          verticalPosition: 'top'
        });
      }
    );
  }

  alreadyLogin(): void {
    const token = this.authService.getToken();
    if (token != null) {
      this.router.navigate(['/dashboard']);
    }
  }

  logout(): void {
    this.authService.logout();
  }
}
