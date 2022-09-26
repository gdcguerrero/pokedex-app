import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { EnrollComponent } from './enroll/enroll.component';



@NgModule({
  declarations: [
    LoginComponent,
    EnrollComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginComponent,
    EnrollComponent
  ]
})
export class AuthModule { }
