import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarTopComponentComponent } from '../../component/partial/navbar-top-component/navbar-top-component.component';
import { FooterComponentComponent } from '../../component/partial/footer-component/footer-component.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NavbarTopComponentComponent,
    FooterComponentComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports : [
    NavbarTopComponentComponent,
    FooterComponentComponent,
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
