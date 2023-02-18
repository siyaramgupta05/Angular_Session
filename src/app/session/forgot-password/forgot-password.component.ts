import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  forgotPasswordFrom = new FormGroup({
    "email" : new FormControl(""),
  })
  constructor(){
    console.log("Forgot Password Component")
  }
  submitHandler(){
    console.log("Forgot Password ",this.forgotPasswordFrom.value)
    alert("Forgot Password")
  }

}
