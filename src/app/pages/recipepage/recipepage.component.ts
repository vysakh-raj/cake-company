import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { MyData } from 'src/assets/data';
import { BakeService } from 'src/app/bake.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-recipepage',
  templateUrl: './recipepage.component.html',
  styleUrls: ['./recipepage.component.css']
})
export class RecipepageComponent {

  constructor(private router:Router,private bake:BakeService){}
  MyData= this.bake.giveData()
  recipe:any
  ngOnInit(){

    let id = Number(localStorage.getItem('id'))
    this.recipe =MyData.filter(e=>e.id==id)
    // console.warn(MyData);
    
    console.log("name",this.recipe)
  }
}
