import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  // {path:'',children:[
    {path:'login', component:SigninComponent},
    {path:'signup', component:SignupComponent},
    {path:'forgot-password', component:ForgotPasswordComponent},
// ]}
  ]

@NgModule({
  declarations: [
    SignupComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class SessionRoutingModule { }
