// import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
// import { Router } from '@angular/router';
// import { FireService } from 'src/app/fire.service';

// @Component({
//   selector: 'app-contactuspage',
//   templateUrl: './contactuspage.component.html',
//   styleUrls: ['./contactuspage.component.css']
// })
// export class ContactuspageComponent {
// info:any=''
// email:any=''
// name:any=''
// constructor(fs:FireService)
// {
 
// }
// contactus()
// { 
//   let Details={
//     info:this.info,
//     email:this.email,
//     name:this.name}
   
// }
// this.fs.contactus1(Details)
// {

// }
// }
import { Component } from '@angular/core';
import { FireService } from 'src/app/fire.service';

@Component({
  selector: 'app-contactuspage',
  templateUrl: './contactuspage.component.html',
  styleUrls: ['./contactuspage.component.css']
})
export class ContactuspageComponent {
  info: any = '';
  email: any = '';
  name: any = '';

  constructor(private fs: FireService) {}

  contactus() {
    this.validation()
    const details = {
      info: this.info,
      email: this.email,
      name: this.name
    };
   
    this.fs.contactus1(details);
    this.info=''
    this.email=''
    this.name=''
  }
  validation()
  {
    if(this.name==='')
    {
      alert('Please enter username')
    }
    else if(this.email==='')
    {
      alert('Please enter password')
    }
    else if(this.info==='')
    {
      alert('Please enter cyour concern')
    }
  
  }
}

