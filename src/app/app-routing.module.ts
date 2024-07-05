import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaintenanceComponentComponent } from './component/maintenance-component/maintenance-component.component';
import { MaintenanceGuard } from './guard/maintenance.guard';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./module/login/login.module').then(m => m.LoginModule), canActivate: [MaintenanceGuard] },
  { path: 'dashboard', loadChildren: () => import('./module/dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [AuthGuard, MaintenanceGuard] },
  { path: 'create-user', loadChildren: () => import('./module/createform/createform.module').then(m => m.CreateformModule), canActivate: [AuthGuard, MaintenanceGuard] },
  { path: 'maintenance', component: MaintenanceComponentComponent, pathMatch: 'full' },
  { path: 'logout', redirectTo: '/login?logout=true', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
