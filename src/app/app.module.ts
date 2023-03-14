import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './units/footer/footer.component';
import { NavbarComponent } from './units/navbar/navbar.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

import { CakepageComponent } from './pages/cakepage/cakepage.component';

import { ContactuspageComponent } from './pages/contactuspage/contactuspage.component';
import { CardComponent } from './units/card/card.component';

import { HeaderComponent } from './units/header/header.component';
import { CourosalComponent } from './units/courosal/courosal.component';

import { RecipepageComponent } from './pages/recipepage/recipepage.component';
import { LoginsignupComponent } from './pages/loginsignup/loginsignup.component';
import { AboutusComponent } from './units/aboutus/aboutus.component';

import { PaymentComponent } from './pages/payment/payment.component';
import { StripeModule } from "stripe-angular";
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore'
import { FormsModule } from '@angular/forms';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { DeliveryaddComponent } from './pages/deliveryadd/deliveryadd.component';


@NgModule({
  
  declarations: [
    AppComponent,

    FooterComponent,
     NavbarComponent,
     HomepageComponent,
     LoginsignupComponent,
     CakepageComponent,
     ContactuspageComponent,
     CardComponent,

     HeaderComponent,
      CourosalComponent,

      RecipepageComponent,
       LoginsignupComponent,
       AboutusComponent,

       PaymentComponent,
        DeliveryaddComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StripeModule.forRoot("pk_test_51MjOXdSIC7K4MDMCMQBmHaY7ewQKPdiCDKR3iBQyO24ZdumcIZa4TxQ9kDacm2miEeldLKgdvQYXZ0wiCbocRTTE00s7wqPClV"),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()) 
  ],
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
