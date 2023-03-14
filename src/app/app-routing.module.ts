import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ContactuspageComponent } from './pages/contactuspage/contactuspage.component';
import { CakepageComponent } from './pages/cakepage/cakepage.component';
import { RecipepageComponent } from './pages/recipepage/recipepage.component';
import { LoginsignupComponent } from './pages/loginsignup/loginsignup.component';
import { AngularFireAuthGuard ,redirectUnauthorizedTo,redirectLoggedInTo} from '@angular/fire/compat/auth-guard';
import { PaymentComponent } from './pages/payment/payment.component';
import { DeliveryaddComponent } from './pages/deliveryadd/deliveryadd.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToItems = () => redirectLoggedInTo(['home']);

const routes: Routes = [
  {
    path:'' ,redirectTo:'login',pathMatch:'full'
  },
  {
    path:'home',component:HomepageComponent,canActivate: [AngularFireAuthGuard],data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path:'contact',component:ContactuspageComponent,canActivate: [AngularFireAuthGuard],data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path:'login',component:LoginsignupComponent,canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToItems }
  },
  {
    path:'cakes',component:CakepageComponent,canActivate: [AngularFireAuthGuard],data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path:'recipe',component:RecipepageComponent,canActivate: [AngularFireAuthGuard],data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path:'payment',component:PaymentComponent,canActivate: [AngularFireAuthGuard],data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path:'address',component:DeliveryaddComponent,canActivate: [AngularFireAuthGuard],data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
