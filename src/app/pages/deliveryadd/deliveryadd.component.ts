import { Component } from '@angular/core';
import { FireService } from 'src/app/fire.service';

@Component({
  selector: 'app-deliveryadd',
  templateUrl: './deliveryadd.component.html',
  styleUrls: ['./deliveryadd.component.css']
})
export class DeliveryaddComponent {
  constructor(private fs:FireService)
  {

  }

name:any=''
address:any=''
number:any=''

  submitForm() {
    
    if (this.name === '') {
      alert('Please enter name')
    }
    
    else if (this.number === '') {
      alert('Please enter phone no')
    }
    else if (this.address === '') {
      alert('Please enter address')
    }
    else {
      const Adddetails = {
        name: this.name,
        address: this.address,
        phone: this.number,
      };
      this.fs.address(Adddetails);
      this.name = '';
      this.address = '';
      this.number = '';
    }
  }

}
