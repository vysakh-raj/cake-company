import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FireService } from 'src/app/fire.service';

@Component({
  selector: 'app-loginsignup',
  templateUrl: './loginsignup.component.html',
  styleUrls: ['./loginsignup.component.css']
})
export class LoginsignupComponent {

  email:any=''
  pass:any=''
  username:any=''
  cpass:any=''
  email1:any=''
  password1:any=''
constructor(private fs:FireService) {
}

//signupfunction

  signUp() {


    this.validation()
    let userDetails={
      email:this.email,
      password:this.pass,
      username:this.username
    }
    this.fs.registration(userDetails)
    this.email=''
    this.pass=''
    this.username=''
    this.cpass=''
  }

  validation()
  {
    if(this.username==='')
    {
      alert('Please enter username')
    }
    else if(this.pass==='')
    {
      alert('Please enter password')
    }
    else if(this.cpass==='')
    {
      alert('Please enter confirm password')
    }
    else if(this.email==='')
    {
      alert('Please enter email')
    }
    else if(this.cpass!=this.pass)
    {
      alert('Password does not match')
    }
  }


  login1()
  {
    if(this.email1==='')
    {
      alert('Please enter email')
    }
    else if(this.password1==='')
    {
      alert('Please enter password')
    }
    let userDetails={
      email:this.email1,
      password:this.password1,

  }
  this.fs.loginfn(userDetails)
  this.email1=''
  this.password1=''
}


}
