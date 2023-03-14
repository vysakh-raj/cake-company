import { Component } from '@angular/core';
import { FireService } from 'src/app/fire.service';
import{AngularFireAuth}from '@angular/fire/compat/auth'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private fs:FireService,public afa:AngularFireAuth){}
  signout()
  {
    this.fs.signout1()
  }

}
