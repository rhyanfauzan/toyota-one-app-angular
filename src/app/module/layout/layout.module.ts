import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SharedModule } from '../shared/shared.module';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { LayoutComponentComponent } from '../../component/layout-component/layout-component.component';


@NgModule({
  declarations: [
  ],
  imports: [
    SharedModule,
    MatInputModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    RouterModule.forChild([
      { path: '', component: LayoutComponentComponent }
    ])
  ]
})
export class LayoutModule { }
