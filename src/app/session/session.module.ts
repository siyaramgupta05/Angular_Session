import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SessionRoutingModule } from './session-routing.module';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    SigninComponent
  ],
  imports: [
    CommonModule,
    SessionRoutingModule,
    ReactiveFormsModule
  ]
})
export class SessionModule { 
  constructor(){
    console.log("Session Module")
  }
}
