import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MyData } from 'src/assets/data';
import { RouterModule } from '@angular/router';
import { BakeService } from 'src/app/bake.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  constructor(private a:Router){}
  myData=MyData
  gotoHere(id: any){
    localStorage.setItem('id',id);
    this.a.navigate(['/recipe']);
  }
  addToCart(data :any) {
    // alert('This feature is not currently available');

    localStorage.setItem('cakeName', data.name);
    localStorage.setItem('cakeImg', data.images);
    localStorage.setItem('cakePrice', data.price);
    localStorage.setItem('cakeId', data.id);
    this.a.navigate(['/payment']);
  }
  
}
