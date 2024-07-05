import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponentComponent } from '../../component/dashboard-component/dashboard-component.component';
import { CarouselComponentComponent } from '../../component/partial/carousel-component/carousel-component.component';
import { AppcardlistComponentComponent } from '../../component/partial/appcardlist-component/appcardlist-component.component';
import { ProgressbarComponentComponent } from '../../component/partial/progressbar-component/progressbar-component.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SharedModule } from '../shared/shared.module';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponentComponent,
    CarouselComponentComponent,
    AppcardlistComponentComponent,
    ProgressbarComponentComponent,
    AppcardlistComponentComponent
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
      { path: '', component: DashboardComponentComponent }
    ])
  ]
})
export class DashboardModule { }
