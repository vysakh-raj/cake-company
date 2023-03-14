import { Component } from '@angular/core';
import { StripeModule, StripeScriptTag } from 'stripe-angular';
import { MyData } from 'src/assets/data';
import { BakeService } from 'src/app/bake.service';
import { Router } from '@angular/router';
import { FireService } from 'src/app/fire.service';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  paymentHandler: any = null;
  cakePrice: any;
  cakeName:any;
  cakeId:any;
  cakeImage:any;
  name:any=''
  email:any=''
  address:any=''
  phone:any=''
  bakeService: BakeService; // declare the bakeService property

  constructor(private router: Router, bakeService: BakeService,private fs:FireService) { // inject the BakeService
    this.bakeService = bakeService;
  }

  ngOnInit() {
    this.invokeStripe();
    this.cakeId=localStorage.getItem('cakeId');
    this.cakePrice=localStorage.getItem('cakePrice');
    this.cakeImage=localStorage.getItem('cakeImg');
    this.cakeName=localStorage.getItem('cakeName'); 
    // console.log(this.cakeImage);
    
  }

  myData = MyData;

  gotoHere(id: any) {
    localStorage.setItem('id', id);
    this.router.navigate(['/payment']);
  }
  
  
  
  // adddressval()
  //  {
   
  //  }
//     let userDetails={
//       email:this.email1,
//       password:this.password1,

//   }
//   this.fs.loginfn(userDetails)
//   this.email1=''
//   this.password1=''
// }

  makePayment() {
    // const data = this.bakeService.giveData();
    // const id = localStorage.getItem('id');
    // const filteredData = data.filter(item => item.id === Number(id));
    // const amount = filteredData[0].price; // use the amount from the filtered data
  
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51MjOXdSIC7K4MDMCMQBmHaY7ewQKPdiCDKR3iBQyO24ZdumcIZa4TxQ9kDacm2miEeldLKgdvQYXZ0wiCbocRTTE00s7wqPClV',
      locale: 'auto',
      token: (stripeToken: any) => {
        console.log(stripeToken);
        alert('Stripe token generated!');
      }
    });
    paymentHandler.open({
      name: 'THE CAKE COMPANY',
      description: 'PLACE YOUR PURCHASE',
      amount: this.cakePrice * 100
    });
  }
  

  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51MjOXdSIC7K4MDMCMQBmHaY7ewQKPdiCDKR3iBQyO24ZdumcIZa4TxQ9kDacm2miEeldLKgdvQYXZ0wiCbocRTTE00s7wqPClV',
          locale: 'auto',
          token: (stripeToken: any) => {
            console.log(stripeToken);
            alert('Payment has been successful!');
          }
        });
      };
      window.document.body.appendChild(script);
    }
  }

  //define the getFilteredData function that uses the BakeService to filter data
  // getFilteredData() {
  //   const data = this.bakeService.giveData();
  //   const id = localStorage.getItem('id');
  //   return data.filter(item => item.id === Number(id));

  // }
}
