import { Component } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signUpFrom = new FormGroup({
    "fname": new FormControl(""),
    "lname": new FormControl(""),
    "username": new FormControl(""),
    "email": new FormControl(""),
    "password": new FormControl(""),
    "Confirmpassword": new FormControl("")
  })
  constructor(){
    console.log("Signup Component")
  }
  submitHandler(){
    console.log("signUpFrom ", this.signUpFrom.value);
    alert("Sign Up")
  }
}
