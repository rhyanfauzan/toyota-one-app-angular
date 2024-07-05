import { NgModule } from '@angular/core';
import { CreateUserComponentComponent } from '../../component/create-user-component/create-user-component.component';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AlertComponentComponent } from '../../component/partial/alert-component/alert-component.component';



@NgModule({
  declarations: [
    CreateUserComponentComponent,
    AlertComponentComponent,
  ],
  imports: [
    SharedModule,
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: CreateUserComponentComponent }
    ]),
  ]
})
export class CreateformModule { }
