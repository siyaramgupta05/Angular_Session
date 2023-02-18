import { Component } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  
  loginFrom = new FormGroup({
    "email":new FormControl(""),
    "password":new FormControl("")
  })
  constructor(){
    console.log("Signin Component")
  }
  submitHandler(){
    console.log("loginFrom ",this.loginFrom.value)
    alert("Login Form")
  }
}
