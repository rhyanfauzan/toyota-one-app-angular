import { NgModule } from '@angular/core';
import { LoginComponentComponent } from '../../component/login-component/login-component.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';



@NgModule({
  declarations: [
    LoginComponentComponent,
  ],
  imports: [
    SharedModule,
    MatInputModule,
    MatSnackBarModule,
    RouterModule.forChild([
      { path: '', component: LoginComponentComponent }
    ]),
  ]
})
export class LoginModule { }
